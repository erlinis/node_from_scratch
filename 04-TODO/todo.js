const {argv} = require('./config/yargs');
const colors = require('colors');
const colorsSafe = require('colors/safe');
const todo_commands = require('./todo/todo_commands');

let command = argv._[0];

switch(command) {
  case 'create':
    let task = todo_commands.create(argv.description);
    console.log('Task created: ', task);
  break;

  case 'list':
    let todoList = todo_commands.list();
    console.log('======= To DO ======='.green);

    for (let task of todoList){
      console.log(task.description);
      console.log(`Status: ${colors.red(task.completed)}`);
      console.log('---------------------'.green);
    }
  break;


  case 'update':
    console.log('updates a todo task');
  break;

  default:
    console.log('Invalid command');
  break;
}
