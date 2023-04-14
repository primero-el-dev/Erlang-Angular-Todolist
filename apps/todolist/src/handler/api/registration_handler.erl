-module(registration_handler).
-behaviour(cowboy_handler).

-export([init/2]).


validate_get_registration_data(Req0) ->
    {Ok, Data, Req} = cowboy_req:read_body(Req0),
    Errors = #{email => null, password => null},
    common:throw_400_if(<<"No JSON content provided.">>, Ok == error),
    common:throw_400_if_not(<<"Content is not a valid JSON.">>, jsx:is_json(Data)),
    Content = jsx:decode(Data),
    {Email, EmailError} = common:pipe_validation(Content, 
        [   { fun(C) -> maps:is_key(<<"email">>, C) end
            , <<"Missing email.">>
            }
        ,   { fun(C) -> is_binary(maps:get(<<"email">>, C)) end
            , <<"Email must be of type string.">> 
            }
        ,   { fun(C) -> C /= <<"">> end
            , <<"Email is required.">>
            , fun(C) -> string:trim(maps:get(<<"email">>, C)) end 
            }
        ,   { fun(C) -> string:length(C) =< 255 end
            , <<"Email must be at most 255 characters long.">>
            }
        ,   { fun(C) -> 
                re:run(C, "^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$") /= nomatch
              end
            , <<"Email address is invalid.">>
            }
        ,   { fun(C) -> 
                case pgo:query("SELECT * FROM \"user\" WHERE email = $1::Varchar", [C]) of
                    {pg_result, _, _, []} -> true;
                    _ -> false
                end
              end
            , <<"Email address already exists in our database. Please choose another or login.">>
            }
        ]
    ),
    {_, PasswordError} = common:pipe_validation(Content, 
        [   { fun(C) -> maps:is_key(<<"password">>, C) end
            , <<"Missing password.">>
            }
        ,   { fun(C) -> is_binary(maps:get(<<"password">>, C)) end
            , <<"Password must be of type string.">> 
            }
        ,   { fun(C) -> C /= <<"">> end
            , <<"Password is required.">>
            }
        ,   { fun(C) -> string:length(maps:get(<<"password">>, C)) >= 12 end
            , <<"Password must be at least 12 characters long.">>
            }
        ,   { fun(C) -> string:length(maps:get(<<"password">>, C)) =< 60 end
            , <<"Password must be at most 60 characters long.">>
            }
        ,   { fun(C) -> 
                re:run(
                    maps:get(<<"password">>, C), 
                    "^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{12,60}$"
                ) /= nomatch
              end
            , <<"Password must contain lowercase, uppercase letters, digit and special character.">>
            }
        ,   { fun(C) -> 
                case maps:is_key(<<"repeat_password">>, C) of
                    true -> maps:get(<<"repeat_password">>, C) == maps:get(<<"password">>, C);
                    false -> false
                end
              end
            , <<"Both passwords must be the same.">>
            }
        ]
    ),
    if
        (EmailError == null) and (PasswordError == null) -> #{email => Email, password => maps:get(<<"password">>, Content)};
        true -> throw(common:get_http_exception([{email, EmailError}, {password, PasswordError}], 400))
    end.


init(Req0 = #{method := <<"POST">>}, State) ->
    Action = fun(Req0, State, UserId) ->
        common:throw_if(
            common:get_http_exception(<<"You're already logged in.">>, 403), 
            UserId /= null
        ),
        token:validate_csrf_reuqest_token(Req0),
        #{email := Email, password := Password} = validate_get_registration_data(Req0),
        {ok, Salt} = bcrypt:gen_salt(),
        {ok, HashedPassword} = bcrypt:hashpw(Password, Salt),
        {pg_result, _, 1, _} = pgo:query("INSERT INTO \"user\" (email, password) VALUES ($1::Varchar, $2::Varchar)", [Email, HashedPassword]),
        
        {#{message => <<"You've registered successfully. Now you can login.">>}, #{}, false}
    end,
    common:wrap_json_response_in_try_catch(Action, Req0, State).