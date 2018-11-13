const fs = require('fs');
const colors = require('colors');


let buildMultiplicationTable = (base, limit) => {
  return new Promise((resolve, reject) => {
    let data = '';

    for (let i = 1; i <= limit; i++ ) {
      data +=(`${base} * ${i} = ${base*i}\n`);
    }
    resolve(data);
  });
}

let writeMultiplicationTableOnFile = async(data, base, limit) => {
  var filename = `table-${base}-to-${limit}.txt`
  fs.writeFile(`tables/${filename}`, data, (err) => {
     if (err) {
      return err;
     }
  });
  return filename;
}

let createTable = async(base, limit) => {
  if (!Number(base)){
     throw new Error(`The base value: '${base}' is not a number`);
  } else {
    let data = await buildMultiplicationTable(base, limit);
    let filename = await writeMultiplicationTableOnFile(data, base, limit);
    return filename;
  }
}

let listTableFile = async(base, limit) => {
   let data = fs.readFileSync(`tables/table-${base}.txt`, 'utf8', (err, data) => {
    if (err) {
      throw new Error(err);
    }
    return data;
  });
  let truncatedData = data.split('\n').slice(0, limit)
  return truncatedData.join('\n');
}

let listTable = async(base, limit) => {
  console.log('========================='.yellow);
  console.log(`Table of ${base} from 1 to ${limit}`.yellow);
  console.log('========================='.yellow);
  return buildMultiplicationTable(base, limit);
}

module.exports = {
 createTable,
 listTable
}



