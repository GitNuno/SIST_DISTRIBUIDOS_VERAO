const mongoose = require('mongoose');
// encriptação
const bcrypt = require('bcryptjs');
const config = require('../config/database');


// CRIAR MODELO PARA USERS
// vai ter os campos (name, e-mail,...) + funções
// schema define como mongoose escreve dados na BD
const UserSchema = mongoose.Schema ({
  name: {
    type: String
  },
  email: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});
// REF:\AUTH\.3\(min.03.30)
// module.exports: para poder usar "User" a partir do exterior Ex. app.js (Ver: Node.js_Tutorial_8_Modules)
// mongoose.model('User', UserSchema) - User: nome do modelo + nome Schema
const User = module.exports = mongoose.model('User', UserSchema);

// FUNÇÕES: -------------------------------------------------------
// module.exports: para poder usar "getUserById" a partir do exterior
module.exports.getUserById = function(id, callback) {
  User.findById(id, callback);
}

module.exports.getUserByUsername = function(username, callback) {
  // query para .findOne()
  const query = {username: username}
  User.findOne(query, callback);
}
// REF:\AUTH\.3\(min.10.00)
// pega na pass inserida no formulário, encripta e atribui pass-encriptada
module.exports.addUser = function(newUser, callback) {
  // genSalt: gera chave aleatória para fazer hash da password
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      // callback devolve err+hash
      if(err) throw err;
      newUser.password = hash;
      newUser.save(callback);
    });
  });
}

// module.exports.comparePassword = function(candidatePassword, hash, callback) {
//   bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
//     if(err) throw err;
//     callback(null, isMatch);
//   });
// }
