const request = require('request');


// ip_v01 - mostra o nosso ip publico
let ip = '';
let dados = '';
// ip_v02 - mostra ip da google
// let ip = 'google.com';
 
// OUTRA API (NADA A HAVER :))
// let _EXTERNAL_URL = 'https://test-proj-heroku.herokuapp.com/api/plans';


// url_v01
// let URL_API = `http://ip-api.com/json/facebook.com`;
// url_v02
let URL_API = `http://ip-api.com/json/?q=${ip}`;


// // VERSÃO-01
// const callExternalApiUsingRequest = (callback) => {
//     request(_API_IP, { json: true }, (err, res, body) => {
//     if (err) { 
//         return callback(err);
//      }
//     return callback(body);
//     });
// };

// VERSÃO-02
const callExternalApiUsingRequest = (callback) => {
   // request(_API_IP, { json: true }, (err, res, body) => { -> assim body não devolve JSON
    request(URL_API, function (err, response, body) { // -> body devolve JSON
    if (err) { 
        return callback(err);
    } else {
        // back-tick (``): são template_literals
        let ipInfo = JSON.parse(body);
        dados = ` <H1> WHERE AM I: </H1>
        IP: ${ipInfo.query} </BR>
        Country: ${ipInfo.country} </BR>
        City: ${ipInfo.city} </BR>
        Region: ${ipInfo.regionName} </BR>
        Lat: ${ipInfo.lat} </BR>
        Lon: ${ipInfo.lon} </BR>
        Organization: ${ipInfo.org} </BR>
        </BR> `;

        console.log(dados);
        return callback(dados);
    }  
    });
};

// 'callApi' nome atribuido á propriedade - chamada em app.js
module.exports.callApi = callExternalApiUsingRequest;
