//  Importando DB
const database = require('../database/database');

module.exports = {
    //  Login
    async login(request, response) {
        const {userName} = request.body;

        const user = await database('users').select('fullName').where('userName', userName).first();

        if (!user) {
            return response.status(400).json({error: 'No user found with this user name'})
        }

        response.header('UserName', userName);

        return response.json(user);
    },

}