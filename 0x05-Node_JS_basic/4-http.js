var http = require('http');

app = http.createServer(function (req, res) {
  res.write('Hello Holberton School!');
  res.end();
}).listen(1245);
