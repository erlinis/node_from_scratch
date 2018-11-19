const axios = require('axios');

const API_KEY = 'c03b2566dde72301e0ae48fdd46f5728'
const API_BASE_URL = 'https://api.openweathermap.org'

const getWeatherByCoordinates = async(lat, lng) => {
  let response = await axios.get(`${API_BASE_URL}/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=${API_KEY}`)

  return response.data.main.temp
}

module.exports = {
  getWeatherByCoordinates
}
