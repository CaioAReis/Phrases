//  Importando o express
const express = require('express');
//  Importando o DB
const database = require('./database/database');
//  Separando o express das rotas
const routes = express.Router();
//  Importando Controllers
const userController = require('./controllers/userController');
const phraseController = require('./controllers/phraseController');
const sessionController = require('./controllers/sessionController');
const profileController = require('./controllers/profileController');
//  Rotas
    //  USERS
        //  Criando registros
        routes.post('/users', userController.create);
        //  Listando registros
        routes.get('/users', userController.list);
        //  Login
        routes.post('/session', sessionController.login);
        //  Listing phrases profile
        routes.get('/profile', profileController.index);

    //  PHRASES
        //  Criando registros
        routes.post('/phrases', phraseController.create);
        //  Listando registros
        routes.get('/phrases', phraseController.list);
        //  Atualizando registros
        routes.put('/phrases/:id', phraseController.update);
        //  Deletando registros
        routes.delete('/phrases/:id', phraseController.delete);
        //  Index
        routes.get('/phruse/:page', phraseController.index);
//  Exportando as rotas
module.exports = routes;