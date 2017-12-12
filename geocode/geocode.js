const request = require('request');

var geocodeAddress = (address, callback) => {
  const base_url = 'https://maps.googleapis.com/maps/api/geocode/json?address='

  request({
    url: `${base_url}${encodeURIComponent(address)}`,
    json: true
  },(error,response, body) => {
    if (error){
      callback("Unable to connect to google servers.");
    } else if (body.status === "ZERO_RESULTS") {
      callback('Unable to find that address.')
    } else if (body.status === "OK") {
      callback(undefined,{
        address: body.results[0].formatted_address,
        lattitude: body.results[0].geometry.location.lat,
        longitude: body.results[0].geometry.location.lng
      });
    }
  });
};

module.exports = {geocodeAddress};
//79b0fb413438a82ed399d052961e30e3
