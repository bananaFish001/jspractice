let readline = require('readline');
var r1 = readline.createInterface(process.stdin, process.stdout)

r1.question('What is your age?', (age) => {
  console.log('Your name is: ' +age);
  r1.close();
});
