/**
 * Required types:
 * 1. Native node packages. Example `fs` (File system)
 * 2. External packages o libraries, like Express.
 * 2. Scripts written by our own and are located inside the app. Start with ./ followed for the filepath.
 */

const {createTable, listTable} = require('./multiply/multiply');
const {argv} = require('./config/yargs');
var colors = require('colors/safe');

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
     .then(filename => console.log(`File ${colors.yellow(filename)} created`))
     .catch(e => console.log(e));
  break;

  default:
    console.log('Invalid command');
  break;
}


