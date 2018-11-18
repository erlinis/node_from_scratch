const place = require('./place/place');

const argv = require('yargs').options({
  address: {
    alias: 'a',
    description: 'Address, city or country to query the weather',
    demand: true
  }
}).argv;

place.getCoordinates(argv.address)
     .then( response => {
       console.log('Coornidates: ', response)
     })
     .catch( error => console.log(error));



