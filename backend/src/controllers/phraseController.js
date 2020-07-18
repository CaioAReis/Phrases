//  Importando DB
const database = require('../database/database');

module.exports = {
    //  LIST
    async list(request, response) {
        const phrases = await database('phrases').select('*');

        return response.json(phrases);
    },
    //  CREATE
    async create(request, response) {
        const {phrase, author} = request.body;
        const users_owner = request.headers.authorization;

        const [id] = await database('phrases').insert({ phrase, author, users_owner});

        return response.json({id});
    },
    //  UPDATE
    async update(request, response) {
        const {id} = request.params;
        const {phrase, author} = request.body;
        const users_owner = request.headers.authorization;

        const phrases = await database('phrases')
            .select('users_owner')
            .where('id', id)
            .first();

        if (phrases.users_owner !== users_owner) {
            return response.status(401).json({ error: 'Operation not permitted.' });
        }

        await database('phrases').where('id', id).update({phrase, author});

        return response.status(204).send();
    },
    //  DELETE
    async delete(request, response) {
        const {id} = request.params;
        const users_owner = request.headers.authorization;

        const phrases = await database('phrases')
            .select('users_owner')
            .where('id', id)
            .first();

        if (phrases.users_owner !== users_owner) {
            return response.status(401).json({error: 'Operation not permited.'});
        }

        await database('phrases').where('id', id).delete();

        return response.status(204).send();
    },
    //  List with user Owner
    async index(request, response) {
        const {page = 1} = request.params;

        const [count] = await database('phrases').count();

        const phrases = await database('phrases')
            .join('users', 'users.userName', '=', 'phrases.users_owner')
            .limit(3)
            .offset((page - 1) * 3)
            .select([
                'phrases.*',
                'users.userName',
                'users.fullName',
                'users.city',
                'users.uf'
            ]);

        response.header('X-Total-Count', count['count(*)']);

        return response.json(phrases);
    }
};