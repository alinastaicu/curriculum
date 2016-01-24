var express = require('express');
var serveStatic = require('serve-static');
var app = express();
var PORT = process.env.PORT || 3000;

app.use(serveStatic(__dirname + '/static'));

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(PORT, function () {
  console.log('Example app listening on port ' + PORT + '!');
});