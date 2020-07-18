//  Criando tabela PHRASES
exports.up = function(knex) {
    return knex.schema.createTable('phrases', (table) => {
        table.increments();

        table.string('phrase').notNullable();
        table.string('author').notNullable();

        table.string('users_owner').notNullable()
        table.foreign('users_owner').references('userName').inTable('users');

        table.timestamp('created_at').defaultTo(knex.fn.now());
    });
};

//  Deletando tabela PHRASES
exports.down = function(knex) {
  return knex.schema.dropTable('phrases');
};
