//  Importando DB
const database = require('../database/database');

module.exports = {
    //  Criando Usuario
    async create(request, response) {
        const {userName, fullName, city, uf} = request.body;

        await database('users').insert({
            userName,
            fullName,
            city,
            uf
        });

        return response.json({ userName });
    },
    //  Listando usuarios
    async list(request, response) {
        const users = await database('users').select('*');

        return response.json(users);
    },
};