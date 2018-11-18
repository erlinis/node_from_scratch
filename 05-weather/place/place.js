const axios = require('axios');

const API_KEY = 'AIzaSyAZ7zantyAHnuNFtheMlJY1VvkRBEjvw9Y';
const API_BASE_URL ='https://maps.googleapis.com/maps/api'

const getCoordinates = async(address) => {
  let encodedAddress = encodeURI(address);
  let response = await axios.get(`${API_BASE_URL}/geocode/json?address=${encodedAddress}&key=${API_KEY}`)

  if (response.data.status === 'ZERO_RESULTS') {
    throw new Error(`No results were found for ${address}`);
  }

  let result = response.data.results[0]
  let location = result.geometry.location

  return {
    address: result.formatted_address,
    lat: location.lat,
    lng: location.lng
  }
}

module.exports = {
 getCoordinates
}
