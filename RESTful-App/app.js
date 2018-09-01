const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
// procurar users em ./routes/users.js
const users = require('./routes/users');
// procurar api em ./routes/api.js
const api = require('./routes/api');
// config BD em ./config/database.js
const config = require('./config/database');


// REF. \VIDEO\.7\(min.01.30)
// instancia de express
const app = express();
const port = 3000;

// Ligar BD
// "database": def. em ./config/database
mongoose.connect(config.database_1);
// REF: \AUTH\.2\(min.21.30)
// Confirma ligação na consola
mongoose.connection.on('connected', function () {
  console.log('Connected to Database '+config.database_1);
});
// Mensagem de Erro
mongoose.connection.on('error', (err) => {
  console.log('Database error '+err);
});


// REF: \AUTH\.2\(min.11.00)
/* MIDDLEWARE */
// cors: middleware - permite fazer um pedido á API a partir de qq dominio
// as restrições serão feitas na autenticação 
app.use(cors());
// permite passar texto como objeto json
// Ex. captar texto na submissão de um formulário como objeto json
app.use(bodyParser.json());
// permite passar texto como urlencoded_data
// Ex. usar form-urlencoded no POSTMAN
app.use(bodyParser.urlencoded({extended:true}));

// REF: \AUTH\.4\(min.1.00)
// criado /config/passport.js
// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);

// REF: \AUTH\.1\(min.11.00) , REF: \AUTH\.2\(min.17.30)
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
// usamos /api para todas as rotas api(videoPlayer-app)
app.use('/api', api);

// listen: inicia servidor na porta 3000
app.listen(port, () => {
  console.log('Server started on port '+port);
  console.log(''+__dirname);
});


