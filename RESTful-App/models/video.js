const mongoose = require('mongoose');
const config = require('../config/database');
// REF:\zVIDEO\.10\(min.02.30)
// CRIAR MODELO PARA VIDEO
// schema define como mongoose escreve dados na BD
const VideoSchema = mongoose.Schema ({
  title: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  description: {
    type: String,
  }
});
// cria modelo com nome "video" - "videos" é o nome da coleccção
// usado nas rotas para GET, POST... CRUD
module.exports = mongoose.model('video', VideoSchema, 'videos');
