function readDatabase(path){
  return new Promise((resolve, reject) => {
    fs.readFile(path, (err, data) => {
      if (err) rej(err);
      if (data){
        let newData = data.toString().split('\n');
        newData = newData.slice(1, newData.length - 1);
        const obj = {};
        newData.forEach((el) => {
          const student = el.split(',');
          if (!obj[student[3]]) obj[student[3]] = [];
          obj[student[3]].push(obj[student[0]]);
        });
        for (const cls in obj) {
          if (cls) console.log(`Number of students in ${cls}: ${obj[cls].length}. List: ${obj[cls].join(', ')}`);
        }
      }
      res();
    });
  });
}
