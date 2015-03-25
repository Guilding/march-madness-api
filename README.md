# March Madness API 

March Madness API is an experiment in open data and open source APIs. You can run the API on your own servers or use a cloud version that's available on Mashape. Improvements and fixes to the [API](/tree/master/api) or [data](/tree/master/data) are most welcome, just send a pull request!

<a href="https://www.mashape.com/community/march-madness?&amp;utm_campaign=mashape5-embed&amp;utm_medium=button&amp;utm_source=march-madness&amp;utm_content=anchorlink&amp;utm_term=icon-dark"><img alt="Mashape" src="https://d1g84eaw0qjo7s.cloudfront.net/images/badges/badge-icon-dark-6460f8cc.png" height="38" width="143"></a>

### Usage

#### Starting the API server

```
git clone https://github.com/Mashape/march-madness-api
cd march-madness-api
npm install
node api/server.js
``` 

Now you have the API running at `127.0.0.1:4444`!

#### API server documentation

The API has the following endpoints:

#### Endpoints

| Path                     | Description                                      |
| -------------------------|------------------------------------------------- |
| /teams                   | returns all teams in the tournament              |
| /games                   | returns all games in the tournament              |

All the endpoints respond with the correct `content-type` based on the `accepts` header:

#### Response types

| Accepts                  | Default                                          |
| ------------------------ |------------------------------------------------- |
| application/json         | true                                             |
| application/xml          | false                                            |
| text/csv                 | false                                            |
| text/tsv                 | false                                            |

All the endpoints respond with the following status codes:

#### Response codes

| Code                     | Description                                      |
| ------------------------ |------------------------------------------------- |
| 200                      | Everything went according to plans               |
| 500                      | Something bad happened, check the logs           |

### Todos

- Add a CLI for updating data
- Get full boxscores for each game
- Add a `/players` endpoint
- Add other years' tournaments
