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

const argv = require('yargs')
            .command('create','Creates a ToDo task', {description})
            .command('update','Updates the task status', {description, completed })
            .help()
            .argv;


module.exports = {
  argv
}
