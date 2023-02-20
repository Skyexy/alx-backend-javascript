const fs = require("fs");
module.exports = function countStudents(){
  var fs = require("fs");
  let data = fs.readFileSync(arguments[0], 'utf8').toString().split('\n');
  consolelog(data)
}
