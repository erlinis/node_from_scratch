/**
 * Required types:
 * 1. Native node packages. Example `fs` (File system)
 * 2. External packages o libraries, like Express.
 * 2. Scripts written by our own and are located inside the app. Start with ./ followed for the filepath.
 */

const {createMultiplicationTable} = require('./multiply/multiply');

let base = 9;
createMultiplicationTable(base)
 .then(filename => console.log(`File ${filename} created`));

