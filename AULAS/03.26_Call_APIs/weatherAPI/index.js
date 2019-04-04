
// // VERSÃO - 01 - SEM JSON_FORMATADO

// let request = require(`request`);
// let apiKey = `ff36744e21a2eb124250183dde2e2884`;
// let cidade = `Guarda`;
// let url =`http://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}&units=metric`
 
// request(url, function (err, response, body) {
//  if(err){
//  console.log(`error:`, error);
//  } else {
//  console.log(`body:`, body);
//  }
// });
// NOTAS VESRSÃO-1:
    // . apiKey — Insiram a chave criada no OpenWeatherMap
    // . url: Invocação da API, onde passamos como parâmetros a cidade e a chave.
// -----------------------------------------------------------------------------------------------

// VERSÃO - 02
let request = require(`request`);
let apiKey = `ff36744e21a2eb124250183dde2e2884`;
let cidade = `Guarda`;
let url =`http://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}&units=metric`
 
request(url, function (err, response, body) {
 if(err){
 console.log(`error:`, error);
 } else {
// formata JSON e coloca-o num objeto "weather"
 let weather = JSON.parse(body);
 let dados = `Temperatura para a ${weather.name}:
 -------------------------------------------
 - Temperatura: ${weather.main.temp}ºc
 - Humidade: ${weather.main.humidity} %`;
 console.log(dados);
 }
});
