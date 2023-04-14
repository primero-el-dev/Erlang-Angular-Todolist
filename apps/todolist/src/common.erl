-module(common).

-export(
    [ combine_lists/2
    , row_to_item/1
    , get_expiry_in_next_minutes/1
    , select_item_sql_base/0
    , throw_if/2
    , throw_if_not/2
    , throw_400_if/2
    , throw_400_if_not/2
    , get_http_exception/2
    , validate_get_todo_request_data/1
    , wrap_json_response_in_try_catch/3
    , pipe_validation/2
    , forbid_if/1
    , get_logged_user_id_ro_forbid/1
    ]
).


combine_lists([], []) ->
    [];

combine_lists([K|Ks], [V|Vs]) ->
    [{K,V} | combine_lists(Ks, Vs)].


datetime_to_rfc(Datetime) ->
    calendar:system_time_to_rfc3339(
        calendar:datetime_to_gregorian_seconds(Datetime) - 
        calendar:datetime_to_gregorian_seconds({{1970,1,1},{0,0,0}})
    ).


row_to_item(Row) ->
    Columns = [<<"id">>, <<"text">>, <<"deadline">>, <<"status">>, <<"created_at">>, <<"user_id">>],
    combine_lists(Columns, tuple_to_list(Row)).


get_expiry_in_next_minutes(Minutes) ->
    {Mega, Secs, _} = os:timestamp(),
    Mega * 1000000 + Secs + 60 * Minutes.


select_item_sql_base() ->
    "SELECT id, text, to_char(deadline, 'YYYY-MM-DD HH:MI:SS'), status, to_char(created_at, 'YYYY-MM-DD HH:MI:SS'), user_id FROM item".


throw_if(Exception, Cond) ->
    if 
        Cond -> throw(Exception);
        true -> true
    end.


throw_if_not(Exception, Cond) ->
    throw_if(Exception, not(Cond)).


get_http_exception(Message) ->
    get_http_exception(Message, 500).

get_http_exception(Message, Code) ->
    {exception, {Code, Message}}.


throw_400_if(Message, Cond) ->
    throw_if(get_http_exception(Message, 400), Cond).


throw_400_if_not(Message, Cond) ->
    throw_if_not(get_http_exception(Message, 400), Cond).


first_upper([]) ->
    [];

first_upper([H|T]) ->
    [string:to_upper(H) | T].


validate_deadline(Content) ->
    % If key isn't set or is null, ignore
    try
        Deadline = maps:get(<<"deadline">>, Content),
        common:pipe_validation(Content, 
            [   { fun(C) -> is_binary(C) and not(is_number(C)) end
                , <<"Deadline must be of type string.">>
                , fun(C) -> maps:get(<<"deadline">>, C) end 
                }
            ,   { fun(C) -> (try is_number(calendar:rfc3339_to_system_time(binary_to_list(C))) catch error:_ -> false end) end
                , <<"Deadline is invalid.">>
                , fun(C) -> string:trim(C) end
                }
            ,   { fun(C) -> C > 0 end
                , <<"Deadline is invalid.">>
                , fun(C) -> calendar:rfc3339_to_system_time(binary_to_list(C)) end
                }
            ]
        )
    catch
        error:_ -> {null, null}
    end.


get_default_varchar_validators(Field) ->
    [   { fun(C) -> maps:is_key(list_to_binary(Field), C) end
        , list_to_binary("Missing " ++ Field ++ ".")
        }
    ,   { fun(C) -> is_binary(maps:get(list_to_binary(Field), C)) end
        , list_to_binary(first_upper(Field) ++ " must be of type string.")
        }
    ,   { fun(C) -> C /= <<"">> end
        , list_to_binary(first_upper(Field) ++ " is required.")
        , fun(C) -> string:trim(maps:get(list_to_binary(Field), C)) end 
        }
    ,   { fun(C) -> string:length(C) =< 255 end
        , list_to_binary(first_upper(Field) ++ " must be at most 255 characters long.")
        }
    ].


%% throws {exception, {HttpCode, Message}}
%% returns map
validate_get_todo_request_data(Req0) ->
    {Ok, Data, Req} = cowboy_req:read_body(Req0),
    common:throw_400_if(<<"No JSON content provided.">>, Ok == error),
    common:throw_400_if_not(<<"Content is not a valid JSON.">>, jsx:is_json(Data)),
    Content = jsx:decode(Data),
    
    {Text, TextError} = common:pipe_validation(Content, get_default_varchar_validators("text")),
    {Status, StatusError} = common:pipe_validation(Content, get_default_varchar_validators("status")),
    {Deadline, DeadlineError} = validate_deadline(Content),
    
    common:throw_400_if(
        [{text, TextError}, {status, StatusError}, {deadline, DeadlineError}], 
        (TextError /= null) or (StatusError /= null) or (DeadlineError /= null)
    ),
    #{text => Text, status => Status, deadline => Deadline}.


wrap_json_response_in_try_catch(Fun, Req0, State) ->
    UserId = token:get_logged_user_id(Req0),
    try
        {Data, Headers, IsLogged} = Fun(Req0, State, UserId),
        SessionExpiryCookie = token:get_session_expiry_cookie(IsLogged),
        Cookies = case maps:is_key(<<"set-cookie">>, Headers) of
            true -> maps:get(<<"set-cookie">>, Headers); 
            false -> [] 
        end,

        ResponseHeaders = maps:merge(
            Headers, 
            #{  <<"set-cookie">> => Cookies ++ [SessionExpiryCookie]
            ,   <<"content-type">> => <<"application/json; charset=UTF-8">>
            }
        ),
        Req = cowboy_req:reply(200, ResponseHeaders, jsx:encode(Data), Req0),
        
        {ok, Req, State}
    catch
        throw:{exception, {Code, Error}} -> get_error_response(Req0, State, UserId, Error, Code);
        throw:{_, Error} -> get_error_response(Req0, State, UserId, Error);
        error:Error -> get_error_response(Req0, State, UserId, Error)
    end.


get_error_response(Req0, State, UserId) ->
    get_error_response(Req0, State, UserId, <<"Internal server error.">>, 500).

get_error_response(Req0, State, UserId, Errors) ->
    get_error_response(Req0, State, UserId, Errors, 500).

get_error_response(Req0, State, UserId, Errors, Code) ->
    Data = if 
        is_binary(Errors) -> [{error, Errors}]; 
        true -> [{errors, Errors}] 
    end,
    Json = jsx:encode(Data),
    Req = cowboy_req:reply(
        Code, 
        #{  <<"content-type">> => <<"application/json; charset=UTF-8">>
        ,   <<"set-cookie">> => [token:get_session_expiry_cookie(UserId /= null)]
        }, 
        Json, 
        Req0
    ),
    {ok, Req, State}.


pipe_validation(Content, []) ->
    {Content, null};

pipe_validation(Content, [{Validator} | Rest]) ->
    Result = Validator(Content),
    case Result of
        false -> {Content, error};
        true -> pipe_validation(Content, Rest)
    end;

pipe_validation(Content, [{Validator,Error} | Rest]) ->
    Result = Validator(Content),
    case Result of
        false -> {Content, Error};
        true -> pipe_validation(Content, Rest)
    end;

pipe_validation(Content, [{Validator,Error,Sanitizer} | Rest]) ->
    Cont = Sanitizer(Content),
    Result = Validator(Cont),
    case Result of
        false -> {Cont, Error};
        true -> pipe_validation(Cont, Rest)
    end.


%% throws exception
forbid_if(Cond) ->
    if 
        Cond -> throw(common:get_http_exception(<<"Forbidden.">>, 403));
        true -> true
    end.

%% throws exception
get_logged_user_id_ro_forbid(Req) ->
    UserId = token:get_logged_user_id(Req),
    if 
        is_number(UserId) -> UserId;
        true -> throw(common:get_http_exception(<<"Forbidden.">>, 403))
    end.