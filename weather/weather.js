
const request = require('request')

var getWeather = (lat,lng,callback) => {
  const api = 'https://api.darksky.net/forecast/79b0fb413438a82ed399d052961e30e3/'

  request({
    url: api + lat + ',' + lng,
    json: true
  },(error,response, body) => {
    if (!error && response.statusCode == 200){
      callback(undefined,{
        temp: body.currently.temperature,
        apparentTemp: body.currently.apparentTemperature
      });
    } else {
      callback('Unable to fetch weather.');
    }
  });
}



module.exports = {
  getWeather
}
//https://api.darksky.net/forecast/79b0fb413438a82ed399d052961e30e3/36.1410253,-86.67118169999999
