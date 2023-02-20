const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
readline.question("Welcome to Holberton School, what is your name?\n", name => {
  console.log(`Your name is: ${name}`);
  readline.close();
  process.on('exit', function(code) {
    process.stdout.write("This important software is now closing\n");
  });
});
