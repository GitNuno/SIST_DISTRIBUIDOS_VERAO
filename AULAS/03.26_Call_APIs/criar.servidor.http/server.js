// usa api 'http'
const http = require('http');
const port = 3001;
const ip = 'localhost';


/* // VERSAO-01
// http.createServer(recebeFunção(req, res))
// res.end('conteudo'): finaliza resposta e devolve conteudo
const server = http.createServer((req, res) => {
  console.log('Recebendo uma request!');
  res.end('<h1>Aqui fica o que vamos enviar para o navegador como resposta!</h1>');
});
*/
// -----------------------------------------------------------------------------------

// VERSAO-02
/* const server = http.createServer((req, res) => {
  if (req.url == '/') {
    res.end('<h1>Home</h1>')
  }

  if (req.url == '/inscreva-se') {
    res.end('<h1>Inscreva-se</h1>')
  }

  if (req.url == '/local') {
    res.end('<h1>Local</h1>')
  }

  if (req.url == '/contato') {
    res.end('<h1>Contato</h1>')
  }

  res.end('<h1>URL sem resposta definida!</h1>')
});
 */
// ------------------------------------------------------------------------------
// VERSAO-03
const server = http.createServer((req, res) => {
  // array_responses
  const responses = []
  // se ['/'] -> valor_responses = '<h1>Home</h1>'
  responses['/'] = '<h1>Home</h1>'
  responses['/inscreva-se'] = '<h1>Inscreva-se</h1>'
  responses['/local'] = '<h1>Local</h1>'
  responses['/contato'] = '<h1>Contato</h1>'
  responses['/naoExiste'] = '<h1>URL sem resposta definida!</h1>'
  // responde de acordo com o url req. pelo browser
  res.end(responses[req.url] || responses['/naoExiste'])
})


server.listen(port, ip, () => {
  console.log(`Servidor rodando em http://${ip}:${port}`);
  console.log('Para derrubar o servidor: ctrl + c');
}); 