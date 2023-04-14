-module(todo_handler).
-behaviour(cowboy_handler).

-export([init/2]).


get_valid_id_from_request_or_throw_exception(Req0, UserId) ->
    #{bindings := #{id := IdString}} = Req0,
    Id = binary_to_integer(IdString),
    DbId = pgo:query("SELECT * FROM item WHERE id = $1::Integer AND user_id = $2::Integer", [Id, UserId]),
    common:throw_if({exception, {404, <<"Item not found.">>}}, length(element(4, DbId)) == 0),
    Id.


init(Req0 = #{method := <<"PUT">>}, State) ->
    Action = fun(Req0, State, UserId) ->
        common:forbid_if(UserId == null),
        Id = get_valid_id_from_request_or_throw_exception(Req0, UserId),

        #{text := Text, status := Status, deadline := Deadline} = common:validate_get_todo_request_data(Req0),
        if
            Deadline == null -> pgo:query(
                "UPDATE item SET text = $1::Text, status = $2::Varchar WHERE id = $3::Integer", 
                [Text, Status, Id]
            );
            true -> pgo:query(
                "UPDATE item SET text = $1::Text, status = $2::Varchar, deadline = TO_TIMESTAMP($3::Integer) WHERE id = $4::Integer", 
                [Text, Status, Deadline, Id]
            )
        end,
        {pg_result, _, 1, [Row]} = pgo:query(common:select_item_sql_base() ++ " WHERE id = $1::Integer", [Id]),
        {#{data => common:row_to_item(Row), message => <<"Item was updated successfully.">>}, #{}, true}
    end,
    common:wrap_json_response_in_try_catch(Action, Req0, State);

init(Req0 = #{method := <<"DELETE">>}, State) ->
    Action = fun(Req0, State, UserId) ->
        common:forbid_if(UserId == null),
        Id = get_valid_id_from_request_or_throw_exception(Req0, UserId),
        
        {pg_result, _, 1, _} = pgo:query("DELETE FROM item WHERE id = $1::Integer", [Id]),
        {#{message => <<"Item was deleted successfully.">>}, #{}, true}
    end,
    common:wrap_json_response_in_try_catch(Action, Req0, State).