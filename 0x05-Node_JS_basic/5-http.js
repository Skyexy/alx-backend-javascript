var http = require('http');
const countStudents = require('./3-read_file_async');
const args = process.argv.slice(2);

const app = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  if (req.url == '/') {
    res.write('Hello Holberton School!');
  }else if (url === '/students'){
    res.write('This is the list of our students\n');
    try {
      const students = await countStudents(arg[0]);
      res.end(`${students.join('\n')}`);
    } catch (error) {
      res.statusCode = 404;
      res.end(error.message);
    }
  }
  res.end();
}).listen(1245);

module.exports = app;
