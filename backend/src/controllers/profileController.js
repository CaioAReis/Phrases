//  Importando DB
const database = require('../database/database');

module.exports = {
    async index(request, response) {
        const userName = request.headers.authorization;

        const phrases = await database('phrases').select('*').where('users_owner', userName);

        return response.json(phrases);
    }
};