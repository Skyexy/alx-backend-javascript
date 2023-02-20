const prompt = require('prompt-sync')({sigint: true});
const name = prompt("Welcome to Holberton School, what is your name?\n");
console.log(`Your name is: ${name}`);
process.on('exit', function(code) {
  return console.log("This important software is now closing");
});
