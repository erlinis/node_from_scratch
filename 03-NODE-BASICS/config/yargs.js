const options = {
  base: {
    demand: true,
    alias: 'b'
  },
  limit: {
    alias: 'l',
    default: 10
  }
}

const argv = require('yargs')
  .command('list', 'Prints the multiplication table of a given base', options)
  .command('create', 'Create the multiplication table of a given base and until the given limit, default 10.', options)
  .help()
  .argv;


module.exports = {
  argv
}