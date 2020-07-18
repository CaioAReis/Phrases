//  Importando o Knex
const knex = require('knex');

//  Importando as configurações do banco de dados
const databaseConfig = require('../../knexfile');

//  Definindo a conexão
const connection = knex(databaseConfig.development);

module.exports = connection;