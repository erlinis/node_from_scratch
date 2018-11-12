/**
 * Required types:
 * 1. Native node packages. Example `fs` (File system)
 * 2. External packages o libraries, like Express.
 * 2. Scripts written by our own and are located inside the app. Start with ./ followed for the filepath.
 */

const {createMultiplicationTable} = require('./multiply/multiply');


/**
 * process.argv contain an array with all the arguments passed to the app
 * when it is executed from the command line
 */
let args = process.argv;
let base = args[2].split('=')[1]

createMultiplicationTable(base)
 .then(filename => console.log(`File ${filename} created`))
 .catch(e => console.log(e));


