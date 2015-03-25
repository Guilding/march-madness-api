# March Madness API

An experiment in open-data running alongside an open source API. 

### Usage

```
git clone https://github.com/Mashape/march-madness-api
cd march-madness-api
npm install
node api/server.js
``` 

Now you have the API running at `127.0.0.1:4444`!

### API Reference

#### `/teams` returns all teams in the tournament

#### `/games` returns all games in the tournament

All endpoints take an optional `accepts` header with the following options: 

> | accepts           | Default              |
> | ----------------- |--------------------- |
> | application/json  | true                 |
> | application/xml   | false                |
> | text/csv          | false                |
> | text/tsv          | false                |

### Contributing

Make changes to the [API](/tree/master/api) or [data](/tree/master/data) and send a pull request!

### Todos

- Add a CLI for updating data
- Get full boxscores for each game
- Add a `/players` endpoint
- Add other years' tournaments

### Made by [Mashape](https://www.mashape.com/) with &hearts;
