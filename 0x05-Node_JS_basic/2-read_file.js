const fs = require("fs");
module.exports = function countStudents(){
  fs.createReadStream(arguments[0])
    .pipe(parse({ delimiter: ",", from_line: 2 }))
    .on("data", function (row) {
    console.log(row);
  })
    .on("error", function (error) {
    process.stdout.write("Cannot load the database");
  });
}
