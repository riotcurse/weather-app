const yargs = require('yargs');

const geocode = require('./geocode/geocode');
const weather = require('./weather/weather')

const argv = yargs
  .options({
  a: {
    demand: true,
    alias: 'address',
    describe: 'Address to fetch weather for.',
    string: true
  }
})
.help()
.alias('help','h')
.argv;

//console.log(argv);
// geocode.geocodeAddress(argv.address, (errorMessage, results) => {
//   if(errorMessage){
//     console.log(errorMessage);
//   }else{
//     console.log(JSON.stringify(results, undefined, 2));
//   }
// } );

//lat,lng,callback
//36.1410253,-86.67118169999999
weather.getWeather(36.1410253,-86.67118169999999,(errorMessage,results) =>{
  if (errorMessage){
    console.log(errorMessage)
  }else{
    console.log(results)
  }
});
