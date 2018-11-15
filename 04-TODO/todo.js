const {argv} = require('./config/yargs');
const todo_commands = require('./todo/todo_commands');

let command = argv._[0];

switch(command) {
  case 'create':
    let task = todo_commands.create(argv.description);
    console.log('creates a todo task: ', task);
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
