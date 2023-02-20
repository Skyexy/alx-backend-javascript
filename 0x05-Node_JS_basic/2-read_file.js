const fs = require("fs");
module.exports = function countStudents(){
  fs.readFile(arguments[0], "utf-8", (err, data) => {
    if (err) process.stdout.write("Cannot load the database");
    else console.log(data.lenght);
  });
}
