-module(login_handler).
-behaviour(cowboy_handler).

-export([init/2]).


validate_get_user_or_throw_exception(Req0) ->
    {Ok, Data, Req} = cowboy_req:read_body(Req0),
    Errors = #{email => null, password => null},
    common:throw_400_if(<<"No JSON content provided.">>, Ok == error),
    common:throw_400_if_not(<<"Content is not a valid JSON.">>, jsx:is_json(Data)),
    Content = jsx:decode(Data),

    {_, EmailError} = common:pipe_validation(Content, 
        [   { fun(C) -> maps:is_key(<<"email">>, C) end 
            , <<"Missing email.">>
            }
        ,   { fun(C) -> is_binary(maps:get(<<"email">>, C)) end
            , <<"Email must be string.">>
            }
        ]
    ),
    {_, PasswordError} = common:pipe_validation(Content, 
        [   { fun(C) -> maps:is_key(<<"password">>, C) end 
            , <<"Missing password.">>
            }
        ,   { fun(C) -> is_binary(maps:get(<<"password">>, C)) end
            , <<"Password must be string.">>
            }
        ]
    ),
    common:throw_400_if([{email, EmailError}, {password, PasswordError}], (EmailError /= null) or (PasswordError /= null)),
    
    Exception = common:get_http_exception(<<"Invalid credentials.">>, 403),
    Email = maps:get(<<"email">>, Content),
    Password = maps:get(<<"password">>, Content),
    {pg_result, _, _, Rows} = pgo:query("SELECT * FROM \"user\" WHERE email = $1::Varchar", [Email]),
    common:throw_if(Exception, length(Rows) == 0),
    User = lists:nth(1, Rows),
    HashedPassword = element(3, User),
    common:throw_if_not(
        Exception, 
        {ok, binary_to_list(HashedPassword)} =:= bcrypt:hashpw(binary_to_list(Password), binary_to_list(HashedPassword))
    ),
    User.


init(Req0 = #{method := <<"POST">>}, State) ->
    Action = fun(Req0, State, UserId) ->
        common:throw_if(
            common:get_http_exception(<<"You're already logged in.">>, 403), 
            UserId /= null
        ),
        token:validate_csrf_reuqest_token(Req0),
        User = validate_get_user_or_throw_exception(Req0),
        SessionToken = token:generate_save_session_token(element(1, User)),
        SessionCookie = list_to_binary(token:session_token_cookie_name() ++ "=" ++ binary_to_list(SessionToken) ++ "; path=/; HttpOnly"),
        {#{message => <<"You've logged in successfully.">>}, #{<<"set-cookie">> => [SessionCookie]}, true}
    end,
    common:wrap_json_response_in_try_catch(Action, Req0, State).