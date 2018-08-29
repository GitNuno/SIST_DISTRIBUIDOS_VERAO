const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const User = require('../models/user');


/* ROTAS: /register, /authenticate, profile, validate */

// REGISTO
// REF:\AUTH\.2\(min.15.30)
// faz /users/register automaticamente - ver: "app.use('/users', users)" em app.js
router.post('/register', (req, res, next) => {
    // REF:\AUTH\.3\(min.7.00)
    // req.body - guardar o que foi introduzido no formulário
    let newUser = new User ({
    name: req.body.name,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password
  });
  // addUser: definido em models\user.js
  User.addUser(newUser, (err, user) => {
    if(err){
      res.json({success: false, msg:'Failed to register user'});
    }else{
      res.json({success: true, msg:'User registered'});
    }
  })
});

// AUTENTICAÇÃO
// REF:\AUTH\.4\(min.7.30)
router.post('/authenticate', (req, res, next) => {
  // input username, password
  const username = req.body.username;
  const password = req.body.password;

  User.getUserByUsername(username, (err, user) => {
    if(err) throw err;
    // se não existir user
    if(!user) {
      return res.json({success: false, msg: 'User not found'});
    }
    // se existir user, compara passwd-introduzida com passwd-verdadeira(hash)
    // password:candidatePassword, user.password:hash, (err, isMatch):callback
    User.comparePassword(password, user.password, (err, isMatch) => {
      if(err) throw err;
      if(isMatch) {
        // const token = jwt.sign({data: user}, config.secret, { ++meanauth
        const token = jwt.sign({data:user}, config.secret, {
          expiresIn: 604800 // pass expira numa semana
        });
        // resposta para front-end
        res.json({
          success: true,
          token: 'JWT '+token,
          // dados user a enviar(não enviar psswd!)
          // user devolvido por: 'getUserByUsername'(acima)
          user: {
            id: user._id,
            name: user.name,
            username: user.username,
            email: user.email
          }
        })
      } else {
        return res.json({success: false, msg: 'Wrong password'});
      }
    });
  });
});


// PERFIL (rota NÃO protegida)
// router.get('/profile', (req, res, next) => {
//   res.send('PROFILE');
//   });

// PERFIL (rota protegida)
// REF:\AUTH\.4\(min.18.30)
router.get('/profile', passport.authenticate('jwt', {session:false}), (req, res, next) => {
  res.json({user: req.user});
});


// permite que objeto router deste ficheiro(users.js) seja acedido fora
module.exports = router;
