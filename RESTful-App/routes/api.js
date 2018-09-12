// REF:\zVIDEO\.10\(min.3.40)
// Todos os pedidos á BD serão atendidos nas rotas
const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({dest: 'uploads/'});
// const mongoose = require('mongoose'); - BD é chamada no arranque em app.js

// importar modelo video.js
const Video = require('../models/video');

// REF:\zVIDEO\.11\(min.1.00)
// ** GET
// . faço get request a localhost:3000/api/videos 
// . function(req, res) dá-me acesso a request + response
// . videos de (/videos) é uma collecção de videoplayer(BD))
// . videoModel(Video) tem acesso ás colecções videoplayer(BD)
// . dps de encontrar todos os videos(.find) vamos executar outra função
//   que devolve erro para consola ou devolve os videos como resposta 
//   para o browser (ficheiro json)
// NÃO ESQUECWER DE REFERENCIAR videoplayer(BD) EM /config/database.js !!!
// Capturar collection:videos de RestfulBD em localhost:3000/api/videos
// '/xxx' pode ser qualquer é o que colocamos no browser para chamar "/api/xxx" servidor expressJs
// não confundir com por Ex: localhost:3000/videos - este é o endç-Angular def. em \app\app.module.ts
router.get('/videos', function(req, res){
    console.log('Get request for all videos');
    // .find() função de mongoose
    Video.find({})
    .exec(function(err, videos){
        if (err){
            console.log("Error retrieving videos");
        }else{
            res.json(videos);
        }
    });
});
// ** GET_BY_ID
// id - passado no url
// req.params.id - o objeto req tem um parametro "id"
// function(err, video) - parametros(err,video) podem tomar qq designação são nomes de variáveis
router.get('/video/:id', function(req, res){
    console.log('Get request for a single video');
    // .findById() função de mongoose
    Video.findById(req.params.id)
    .exec(function(err, video){
        if (err){
            console.log("Error retrieving video");
        }else{
            res.json(video);
        }
    });
});

// REF:\zVIDEO\.12\(min.1.00)
// ** INSERT/CREATE
// ** UPLOAD - REF:\TRABALHOS\UPLOADS\.1\(min.2.30)
// notar que a rota é api/video e não api/videos
router.post('/video', upload.single('file'), function(req, res){
    console.log('Posting a video');
    // criar video com VideoModel
    var newVideo = new Video();
    // capturar video com req.body_object
    newVideo.title = req.body.title;
    newVideo.url = req.body.url;
    newVideo.description = req.body.description;
    // inserir video na BD
    newVideo.save(function(err, insertedVideo){
        if (err){
            console.log("Error inserting video");
        }else{
            res.json(insertedVideo);
        }
    })
});

// REF:\zVIDEO\.12\(min.1.00)
// ** UPDATE
router.put('/video/:id', function(req, res){
    console.log('Updating a video');
    // find do Video pelo id obtido no request
    Video.findByIdAndUpdate(req.params.id, 
        {   // "title", "url", "description": serão atualizados com os dados do formulário(form)
            $set: {title: req.body.title, url: req.body.url, description: req.body.description}
        },
        {   // se verdadeiro "function(err, updatedVideo)" envia video atualizado
            // se falso "function(err, updatedVideo)" envia video original
            new: true
        },
        function(err, updatedVideo){
            if(err){
                res.send("Error Updating Video");
            }else{
                // posso usar esta resposta para exibir ao utilizador ??
                res.json(updatedVideo);
            }
        });// end_findByIdAndUpdate()
    });// end_router.put()

// REF:\zVIDEO\.12\(min.1.00)
// ** DELETE
router.delete('/video/:id', function(req, res){
    console.log('Deleting a video');
    Video.findByIdAndRemove(req.params.id, function(err, deletedVideo){
        if(err){
            res.send("Error deleting video");
        }else{
            // posso usar esta resposta para exibir ao utilizador ??
            res.json(deletedVideo);
        }
    });  
});



/* ----------------------------------------- ZONA TESTES ------------------------------------------------------- */

// (APAGAR) TESTE responde a localhost:3000/api - é acrescentado "/" a api a no url
router.get('/', function(req, res){
    res.send('api works');
});

// permite que objeto seja acedido fora
module.exports = router;
