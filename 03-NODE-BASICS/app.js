/**
 * Required types:
 * 1. Native node packages. Example `fs` (File system)
 * 2. External packages o libraries, like Express.
 * 2. Scripts written by our own and are located inside the app. Start with ./ followed for the filepath.
 */

const {createTable, listTable} = require('./multiply/multiply');

const argv = require('yargs')
  .command('list', 'Prints the multiplication table of a given base', {
    base: {
      demand: true,
      alias: 'b'
    },
    limit: {
      alias: 'l',
      default: 10
    }
  })
  .command('create', 'Create the multiplication table of a given base and until the given limit, default 10.', {
    base: {
      demand: true,
      alias: 'b'
    },
    limit: {
      alias: 'l',
      default: 10
    }
  })
  .help()
  .argv;

//console.log(argv);

let command = argv._[0];

switch (command) {
  case 'list':
    var base = argv.base;
    var limit = argv.limit;

    listTable(base, limit)
     .then(data => console.log(data))
     .catch(e => console.log(e));
  break;

  case 'create':
    var base = argv.base;
    var limit = argv.limit;

    createTable(base, limit)
     .then(filename => console.log(`File ${filename} created`))
     .catch(e => console.log(e));
  break;

  default:
    console.log('Invalid command');
  break;
}


