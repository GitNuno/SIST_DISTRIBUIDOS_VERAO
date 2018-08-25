const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
// Ref. ás pastas criadas
const users = require('./routes/users');
const config = require('./config/database');

const app = express();
const port = 3000;

// Ligar BD
// "database": nome em ./config/database
mongoose.connect(config.database);
// REF: \AUTH\.2\(min.21.30)
// Confirma ligação na consola
mongoose.connection.on('connected', function () {
  console.log('Connected to Database '+config.database);
});
// Mensagem de Erro
mongoose.connection.on('error', (err) => {
  console.log('Database error '+err);
});

// REF: \AUTH\.2\(min.11.00)
// cors: middleware - permite fazer um pedido á API a partir de qq dominio
// as restrições serão feitas na autenticação 
app.use(cors());
// bodyParser: middleware - permite por Ex. captar data na submissão
// de um formulário
app.use(bodyParser.json());

// REF: \AUTH\.2\(min.17.30)
// Static-Folder: criar lugar guardar ficheiros-ocultos (ANGULAR_2)
// tem de estar acima de: app.get('/',...) ,  __dirname: dir-atual
app.use(express.static(path.join(__dirname, 'public')));

// rota index (HOME_PAGE): raiz '/': localhost:3000/
app.get('/', function (req, res) {
    res.send('End-point Provisório!!!!');
});
// REF: \AUTH\.2\(min.14.00)
// rotas users vão para: /routes/users.js
// tudo que for localhost:3000/users/qqCoisa vai para essa pasta
// EX. localhost:3000/users/register, /register está def. em \routes\users.js
app.use('/users', users);

// listen: inicia servidor na porta 3000
app.listen(port, function () {
    console.log('server started on port' + port)
});
