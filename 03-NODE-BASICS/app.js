/**
 * Required types:
 * 1. Native node packages. Example `fs` (File system)
 * 2. External packages o libraries, like Express.
 * 2. Scripts written by our own and are located inside the app. Start with ./ followed for the filepath.
 */

const fs = require('fs');

let base = 2;
let tableData = '';

for (let i = 1; i <= 10; i++ ) {
  tableData +=(`${base} * ${i} = ${base*i}\n`);
}


fs.writeFile(`tables/table-${base}.txt`, tableData, (err) => {
  if (err) throw err;

  console.log('The file has been saved!');
});
