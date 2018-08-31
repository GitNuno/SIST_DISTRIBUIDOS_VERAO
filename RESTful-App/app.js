const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
// procura users em ./routes/users
const users = require('./routes/users');
const config = require('./config/database');

// instancia de express
// REF. \VIDEO\.7\(min.01.30)
const app = express();
const port = 3000;

// Ligar BD
// "database": def. em ./config/database
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

// REF: \AUTH\.4\(min.1.00)
// criado /config/passport.js
// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);

// REF: \AUTH\.2\(min.17.30)
// REF: \NODE_JS\1-TRAVERSY MEDIA\2-ExpressJs-Static_Files(min.02.30)
// tem de estar acima de: app.get('/',...)
// join(__dirname, 'public') - junta path "__dirname(dir-atual) com \public
// dá a expressJs acesso á pasta \public - liga expressJs com angular
app.use(express.static(path.join(__dirname, 'public')));


// rota index (HOME_PAGE): raiz '/': localhost:3000/
app.get('/', function (req, res) {
    res.send('End-point Inválido!!!!');
});
// REF: \AUTH\.2\(min.14.00)
// usamos /users para todas as rotas users
// EX. localhost:3000/users/register, /register está def. em \routes\users.js
// estamos a dizer ao servidor express para procurar rotas em 'users=required(...)' qd endç. for /users
// qualquer outra rota != ´users´, expressJs procura em /public/index.html
app.use('/users', users);

// listen: inicia servidor na porta 3000
app.listen(port, () => {
  console.log('Server started on port '+port);
  console.log(''+__dirname);
});


