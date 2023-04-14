-module(keep_alive_handler).
-behaviour(cowboy_handler).

-export([init/2]).


init(Req0, State) ->
    Action = fun(Req0, State, UserId) ->
        common:forbid_if(UserId == null),
        {#{message => <<"Session extended successfully.">>}, #{}, true}
    end,
    common:wrap_json_response_in_try_catch(Action, Req0, State).
