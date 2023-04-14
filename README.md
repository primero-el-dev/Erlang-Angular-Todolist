# Erlang-Angular-Todolist

## Features:
- Registration and login (todos are stored in shared database and accessed by user)
- Todo creation, editing, deletion, search and sort

## Technologies:
- Erlang 22
- Cowboy (HTTP server for Erlang)
- Typescript
- Angular 14
- Angular router
- PostgreSQL 12

## How to start (I write it from my head, but haven't tested fully):
- Install Erlang and rebar3
- Create database from file `db.sql` (credentials are in `config/sys.config`)
- Run `rebar3 release`
- Execute build file (`./_build/default/rel/todolist/bin/todolist daemon`)
- Go to `front` directory
- Run `npm install` or `yarn install`
- Run `npm run build` or `yarn run build`
- Go to `http://localhost:3030` (port is specified in `apps/todolist/src/todolist_app.erl` in function `start`)
