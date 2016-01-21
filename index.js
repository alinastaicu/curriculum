var express = require('express');
var serveStatic = require('serve-static');
var app = express();

app.use(serveStatic(__dirname + '/static'));

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});