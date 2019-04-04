
// usando api 'http'
const http = require('http');
const port = 3003;
const ip = 'localhost';

// API
const apiCallFromRequest = require('./Request');


// http.createServer(recebeFunção(req, res))
// res.end('conteudo'): finaliza resposta e devolve conteudo
const server = http.createServer((req, res) => {
    console.log('Recebendo uma request...');
    apiCallFromRequest.callApi(function(response){
        console.log(response);
        // res.write(JSON.stringify(response));
        res.write(response);
        res.end();
    }); 
    
   // res.end('<h1>Aqui fica o que vamos enviar para o navegador como resposta!</h1>');
  });

  server.listen(port, ip, () => {
    // back-tick (``): são template_literals
    console.log(`Servidor: http://${ip}:${port}`);
  }); 


  
