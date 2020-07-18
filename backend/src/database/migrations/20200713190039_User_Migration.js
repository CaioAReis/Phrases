//  Criando tabela USERS
exports.up = function(knex) {
  return knex.schema.createTable('users', (table) => {
      table.string('userName').notNullable();
      table.string('fullName').notNullable();
      table.string('city').notNullable();
      table.string('uf', 2).notNullable();

      table.primary('userName').unique('username');
  });
};

//  Deletando tabela USERS
exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
