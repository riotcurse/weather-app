const request = require('request');

var geocodeAddress = (address) => {
  const base_url = 'https://maps.googleapis.com/maps/api/geocode/json?address='

  request({
    url: `${base_url}${encodeURIComponent(address)}`,
    json: true
  },(error,response, body) => {
    if (error){
      console.log("Unable to connect to google servers.")
    } else if (body.status === "ZERO_RESULTS") {
      console.log('Unable to find that address.')
    } else if (body.status === "OK") {
      console.log(`Address: ${body.results[0].formatted_address}`);
      console.log(`Lattitude: ${body.results[0].geometry.location.lat}`);
      console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
    }
  });
};
