-module(token).

-export(
    [ get_session_lifetime_minutes/0
    , csrf_token_cookie_name/0
    , session_token_cookie_name/0
    , get_session_expiry_cookie/1
    , get_csrf_token_cookie/1
    , delete_old_tokens/0
    , generate_save_csrf_token/0
    , generate_save_session_token/1
    , check_token/2
    , validate_csrf_reuqest_token/1
    , get_logged_user_id/1
    , delete_session/1
    ]
).


get_session_lifetime_minutes() ->
    20.


csrf_token_cookie_name() ->
    "CSRF-Token".


session_token_cookie_name() ->
    "sessionid".


get_session_expiry_cookie(IsLogged) ->
    Expiry = if 
        IsLogged -> common:get_expiry_in_next_minutes(get_session_lifetime_minutes()); 
        true -> 0 
    end,
    list_to_binary("session-expiry=" ++ integer_to_list(Expiry) ++ "; path=/").


get_csrf_token_cookie(Token) ->
    csrf_token_cookie_name() ++ "=" ++ binary_to_list(Token) ++ "; HttpOnly; SameSite=Strict".


delete_old_tokens() ->
    {Mega, Secs, _} = os:timestamp(),
    Expiry = Mega * 1000000 + Secs,
    pgo:query("DELETE FROM token WHERE expiry < $1::Integer", [Expiry]).


generate_save_csrf_token() ->
    generate_save_token(<<"csrf">>, 60).


generate_save_session_token(UserId) ->
    generate_save_token(<<"session">>, get_session_lifetime_minutes(), UserId).


generate_save_token(Type, LifetimeInMinutes) ->
    generate_save_token(Type, LifetimeInMinutes, null).

generate_save_token(Type, LifetimeInMinutes, UserId) ->
    Bits = entropy_string:bits(1.0e24, 1.0e28),
    Value = entropy_string:random_string(Bits),
    {Mega, Secs, _} = os:timestamp(),
    Expiry = Mega * 1000000 + Secs + LifetimeInMinutes * 60,
    if
        UserId == null -> 
            {pg_result, _, 1, _} = pgo:query(
                "INSERT INTO token (value, type, expiry) VALUES ($1::Varchar, $2::Varchar, $3::Integer)", 
                [Value, Type, Expiry]
            );
        true ->
            {pg_result, _, 1, _} = pgo:query(
                "INSERT INTO token (value, type, expiry, user_id) VALUES ($1::Varchar, $2::Varchar, $3::Integer, $4::Integer)", 
                [Value, Type, Expiry, UserId]
            )
    end,
    Value.


check_token(Value, Type) ->
    {Mega, Secs, _} = os:timestamp(),
    Expiry = Mega * 1000000 + Secs,
    {pg_result, _, N, _} = pgo:query(
        "SELECT * FROM token WHERE value = $1::Varchar AND type = $2::Varchar AND expiry >= $3::Integer", 
        [Value, Type, Expiry]
    ),
    N > 0.


%% throws exception
validate_csrf_reuqest_token(Req) ->
    try
        Cookies = cowboy_req:parse_cookies(Req),
        {_, Token} = lists:keyfind(list_to_binary(csrf_token_cookie_name()), 1, Cookies),
        common:throw_if_not(<<"">>, token:check_token(Token, <<"csrf">>))
    catch
        error:_ -> throw(common:get_http_exception(<<"Invalid CSRF token.">>, 403));
        throw:_ -> throw(common:get_http_exception(<<"Invalid CSRF token.">>, 403))
    end.


get_logged_user_id(Req) ->
    try
        Cookies = cowboy_req:parse_cookies(Req),
        {_, Token} = lists:keyfind(list_to_binary(session_token_cookie_name()), 1, Cookies),
        {pg_result, _, _, UserIds} = pgo:query(
            "UPDATE token SET expiry = $1::Integer WHERE value = $2::Varchar AND expiry >= $3::Integer RETURNING user_id", 
            [common:get_expiry_in_next_minutes(get_session_lifetime_minutes()), Token, common:get_expiry_in_next_minutes(0)]
        ),
        if
            length(UserIds) > 0 -> element(1, lists:nth(1, UserIds));
            true -> null
        end
    catch
        error:_ ->
            null
    end.


delete_session(Req) ->
    Cookies = cowboy_req:parse_cookies(Req),
    {_, Token} = lists:keyfind(list_to_binary(session_token_cookie_name()), 1, Cookies),
    {pg_result, _, _, _} = pgo:query(
        "DELETE FROM token WHERE value = $1::Varchar AND type = $2::Varchar", 
        [Token, <<"session">>]
    ).
