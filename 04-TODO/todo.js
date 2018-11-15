const {argv} = require('./config/yargs');

let command = argv._[0];

switch(command) {
  case 'create':
    console.log('creates a todo task');
  break;

  case 'list':
    console.log('displays all todo task');
  break;

  case 'update':
    console.log('updates a todo task');
  break;

  default:
    console.log('Invalid command');
  break;
}
