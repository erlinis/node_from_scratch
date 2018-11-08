const fs = require('fs');

let buildMultiplicationTable = (base) => {
  return new Promise((resolve, reject) => {
    let data = '';

    for (let i = 1; i <= 10; i++ ) {
      data +=(`${base} * ${i} = ${base*i}\n`);
    }
    resolve(data);
  });
}

let writeMultiplicationTableOnFile = async(data, base) => {
  var filename = `table-${base}.txt`
  fs.writeFile(`tables/${filename}`, data, (err) => {
     if (err) {
      return err;
     }
  });
  return filename;
}

let createMultiplicationTable = async(base) => {
  let data = await buildMultiplicationTable(base);
  let filename = await writeMultiplicationTableOnFile(data, base);
  console.log("createMultiplicationTable data:",filename);
  return filename;
}

module.exports = {
 createMultiplicationTable
}



