-module(home_handler).
-behaviour(cowboy_handler).

-export([init/2]).


init(Req0, State) ->
    UserId = token:get_logged_user_id(Req0),
    {ok, Content} = file:read_file(code:priv_dir(todolist) ++ "/index.html"),
    token:delete_old_tokens(),
    Token = token:generate_save_csrf_token(),
    Req = cowboy_req:reply(
        200,
        #{  <<"content-type">> => <<"text/html; charset=UTF-8">>
        ,   <<"set-cookie">> => [token:get_csrf_token_cookie(Token), token:get_session_expiry_cookie(UserId /= null)]
        },
        Content, 
        Req0
    ),
    {ok, Req, State}.
