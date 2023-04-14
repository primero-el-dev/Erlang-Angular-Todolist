%%%-------------------------------------------------------------------
%% @doc todolist public API
%% @end
%%%-------------------------------------------------------------------

-module(todolist_app).

-behaviour(application).

-export([start/2, stop/1]).

start(_StartType, _StartArgs) ->
    Dispatch = cowboy_router:compile([{'_', % Set Host to any
        [ {"/", home_handler, []}
        , {"/registration", home_handler, []}
        , {"/login", home_handler, []}
        , {"/api/keep-alive", keep_alive_handler, []}
        , {"/api/registration", registration_handler, []}
        , {"/api/login", login_handler, []}
        , {"/api/logout", logout_handler, []}
        , {"/api/todo", todos_handler, []}
        , {"/api/todo/:id", todo_handler, []}
        , {"/[...]", cowboy_static, {priv_dir, todolist, "/"}}
        ]
    }]),
    persistent_term:put(unit1_routes, Dispatch),
    cowboy:start_clear(unit1_http_listener,
        [{port, 3030}],
        #{env => #{dispatch => {persistent_term, unit1_routes}}}
    ),
    todolist_sup:start_link().

stop(_State) ->
    ok = cowboy:stop_listener(unit1_http_listener).

%% internal functions
