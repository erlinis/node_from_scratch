const description = {
  demand: true,
  alias: 'd',
  description: 'Short explanation of the task'
}

const completed = {
  default: true,
  alias: 'c',
  description: `Send <true> to mark the task as completed,
               otherwise send <false>`
}

const statusFilter = {
  alias: 'c',
  description: `Send <true> to list the completed tasks,
                send <false> to list the incompleted tasks,
                if nothing is send it will list all tasks`
}

const argv = require('yargs')
            .command('create','Creates a ToDo task', {description})
            .command('update','Updates the task status', {description, completed })
            .command('delete','Deletes a ToDo task', {description})
            .command('list','Displays all ToDo tasks', {completed: statusFilter})
            .help()
            .argv;


module.exports = {
  argv
}
