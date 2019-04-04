
// correr este script com: node versaoProf.pp.js (windows)
let request = require('request');
 
let url = `http://ip-api.com/json`
let dados = '';
 
request(url, function (err, response, body) {
   if(err){
       console.log('error:', err);
   } else {
       let ipInfo = JSON.parse(body);
       dados = `?????????? WHERE AM I ?????????
                -------------------------------
                IP: ${ipInfo.query}
                Country: ${ipInfo.country}
                City: ${ipInfo.city}
                Region: ${ipInfo.regionName}
                Lat: ${ipInfo.lat}
                Lon: ${ipInfo.lon}
                Organization: ${ipInfo.org}
                -------------------------------
                Dev by CP 2019`
       console.log(dados);
   }
});


