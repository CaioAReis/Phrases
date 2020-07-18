//  Importando o Express
const express = require('express');
//  Importando o arquivo de rotas
const routes = require('./routes');

//  Criando o app
const app = express();

//  Dizendo ao app que estamos usando JSON
app.use(express.json());
//  Dizendo ao app para utilizar as rotas
app.use(routes);

//  Rota para ouvir as requisições do servidor: http://localhost:3333
app.listen(3333, () => {
    console.log('Server is running!');
});