const place = require('./place/place');
const weather = require('./weather/weather');

const argv = require('yargs').options({
  address: {
    alias: 'a',
    description: 'Address, city or country to query the weather',
    demand: true
  }
}).argv;

let getInfo = async(address) => {
  try {
    let coordinates = await place.getCoordinates(address);
    let temperature = await weather.getWeatherByCoordinates(coordinates.lat, coordinates.lng);
    return `The temperature in ${address} is ${temperature}`;
  } catch (e) {
    return `there no weather result for ${address}`;
  }
}

getInfo(argv.address)
   .then(message => {
     console.log(message)
   })
   .catch( error => console.log(error));

