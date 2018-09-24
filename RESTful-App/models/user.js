const mongoose = require('mongoose');
// encriptação
const bcrypt = require('bcryptjs');
const config = require('../config/database');


// CRIAR MODELO PARA USERS
// vai ter os campos (name, e-mail,...) + funções
// schema define como mongoose escreve dados na BD
const UserSchema = mongoose.Schema ({
  name: { type: String },
  email: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true }
});
// REF:\AUTH\.3\(min.03.30)
// cria modelo com nome "video" baseado em UserSchema
// usado nas rotas para GET, POST... CRUD
const User = module.exports = mongoose.model('User', UserSchema);


// Métodos: -------------------------------------------------------
// não inclui métodos em /models/video (são mais simples)
// module.exports: para poder usar "getUserById" a partir do exterior
// Todos os pedidos á BD serão atendidos em \routes\users
module.exports.getUserById = function(id, callback) {
  User.findById(id, callback);
}

// chamada em routes/users.js
module.exports.getUserByUsername = function(username, callback) {
  // query para User.findOne()
  const query = {username: username}
  User.findOne(query, callback);
}

// REF:\AUTH\.3\(min.10.00)
// usada em users: Register
// pega na pass inserida no formulário, encripta e atribui pass-encriptada
module.exports.addUser = function(newUser, callback) {
  // genSalt: gera chave aleatória para fazer hash da password
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      // callback devolve err+hash
      if(err) throw err;
      newUser.password = hash;
      // guarda na BD
      newUser.save(callback);
    });
  });
}

// REF:\AUTH\.4\(min.13.30)
// chamada em users.js
module.exports.comparePassword = function(candidatePassword, hash, callback) {
  bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
    if(err) throw err;
    callback(null, isMatch);
  });
}
