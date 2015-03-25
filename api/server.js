var http = require('http')
var aoot = require('aoot')

var games = __dirname  + '/../data/games.json'
var teams = __dirname  + '/../data/teams.json'

http.createServer(function (req, res) {

  try {
    var headers = {}
    headers["Connection"] = "close"
    headers["Access-Control-Allow-Origin"] = "*"
    headers["Access-Control-Allow-Methods"] = "GET, OPTIONS"

    // Check the path to get data source
    var data
    if (req.url === "/teams") {
      data = teams
    } else {
      data = games
    }

    // Check accept headers for output type conversion
    var output = require(data)
    if (req.headers.accept === "application/xml") {
      output = aoot.xml(output)
      ctype = "application/xml"
    } else if (req.headers.accept === "text/csv") {
      output = aoot.csv(output)
      ctype = "text/csv"
    } else if (req.headers.accept === "text/tsv") {
      output = aoot.tsv(output)
      ctype = "text/tsv"
    } else {
      ctype = "application/json"
      output = JSON.stringify(output, null, 4)
    }

    headers["Content-Type"] = ctype
    res.writeHead(200, headers)
    res.write(output)
    res.end()

  } catch(err) {
    console.log(err)
    headers["Content-Type"] = "text/plain"
    res.writeHead(500, headers)
    res.write("An unexpected error has occured, please try again.")
    res.end()
  }

}).listen(4444)
