-module(logout_handler).
-behaviour(cowboy_handler).

-export([init/2]).


init(Req0, State) ->
    Action = fun(Req0, State, UserId) ->
        common:forbid_if(UserId == null),
        token:delete_session(Req0),
        SessionCookie = (token:session_token_cookie_name() ++ "=a; Expires=Thu, 31 Oct 2021 00:00:00 GMT; HttpOnly; SameSite=Strict"),
        {#{message => <<"You've logged out successfully.">>}, #{<<"set-cookie">> => [SessionCookie]}, false}
    end,
    common:wrap_json_response_in_try_catch(Action, Req0, State).
