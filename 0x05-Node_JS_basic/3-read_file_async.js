const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    let data = fs.readFileSync(path, 'utf8').toString().split('\n');
    data = data.slice(1, data.length - 1);
    console.log(`Number of students: ${data.length}`);
    var obj = {};
    data.forEach((el) => {
      const student = el.split(',');
      if (!obj[student[3]]) obj[student[3]] = [];
      obj[student[3]].push(student[0]);
    });
    resolve(obj);
    for (const cls in obj) {
      if (cls) console.log(`Number of students in ${cls}: ${obj[cls].length}. List: ${obj[cls].join(', ')}`);
    }
  }.catch (err) {
    reject(err)
    throw new Error('Cannot load the database');
  }

module.exports = countStudents;
