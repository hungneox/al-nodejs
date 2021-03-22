# al home assignment

# Server

## Install dependencies

Go to `./server` directory by running `cd server`

```
yarn
```
## For running the server

```
yarn start
```

It will run server at `http://localhost:8080/`

# Client

Install dependencies by `cd client && yarn`

## For running client UI

```
yarn start
```
It will open `http://localhost:3000/`

# What was done
- [x] Reactjs front-end with redux/redux-saga setup
- [x] UI To create and delete data
- [x] Express server with basic setup
- [x] REST API to and CRUD for docs
    - No UI for UPDATE and EDIT but still works with Postman or curl for example

# Differences from the requirments:
- `docs` table (id, author, content) in sqlite3 db
- No authentication
- No websocket push notification
