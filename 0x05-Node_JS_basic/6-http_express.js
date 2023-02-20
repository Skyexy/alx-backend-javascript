var express = require('express');
var app = express();

app.get('/', function (req, res) {
   res.end('Hello Holberton School!');
})

app.listen(1245);
module.exports = app;
