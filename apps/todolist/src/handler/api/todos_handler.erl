-module(todos_handler).
-behaviour(cowboy_handler).

-export([init/2]).


init(Req0 = #{method := <<"GET">>}, State) ->
    Action = fun(Req0, State, UserId) ->
        common:forbid_if(UserId == null),
        {pg_result, _, _, Rows} = pgo:query(common:select_item_sql_base() ++ " WHERE user_id = $1::Integer", [UserId]),
        {#{data => lists:map(fun(R) -> common:row_to_item(R) end, Rows)}, #{}, true}
    end,
    common:wrap_json_response_in_try_catch(Action, Req0, State);

init(Req0 = #{method := <<"POST">>}, State) ->
    Action = fun(Req0, State, UserId) ->
        common:forbid_if(UserId == null),
        #{text := Text, status := Status, deadline := Deadline} = common:validate_get_todo_request_data(Req0),
        if
            Deadline == null -> pgo:query(
                "INSERT INTO item (text, status, user_id) VALUES ($1::Text, $2::Varchar, $3::Integer)", 
                [Text, Status, UserId]
            );
            true -> pgo:query(
                "INSERT INTO item (text, status, user_id, deadline) VALUES ($1::Text, $2::Varchar, $3::Integer, TO_TIMESTAMP($4::Integer))", 
                [Text, Status, UserId, Deadline]
            )
        end,
        {pg_result, _, _, [Row]} = pgo:query(common:select_item_sql_base() ++ " ORDER BY id DESC LIMIT 1"),
        {#{data => common:row_to_item(Row), message => <<"Item was created successfully.">>}, #{}, true}
    end,
    common:wrap_json_response_in_try_catch(Action, Req0, State).
