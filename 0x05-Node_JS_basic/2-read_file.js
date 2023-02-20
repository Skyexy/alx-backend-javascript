const fs = require("fs");
module.exports = function countStudents(){
  var fs = require("fs");
  var data = fs.readFileSync("your.csv").toLocaleString();
  
  var rows = data.split("\n");
  rows.forEach((row) => {
    columns = row.split(","); //SPLIT COLUMNS
    console.log(columns);
  })
}
