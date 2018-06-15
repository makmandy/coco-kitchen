exports.up = (knex, Promise) => {
  return Promise.all([
    knex.schema.createTable('ingredients', (table) => {
      table.increments();
      table.string('name').notNullable();
      table.integer('count');
    }),
    knex.schema.createTable('recipes', (table) => {
      table.increments();
      table.string('name').notNullable();
      table.string('href');
    }),
  ])
};

exports.down = (knex, Promise) => {
  return Promise.all([
    knex.schema.dropTable('ingredients'),
    knex.schema.dropTable('recipes'),
  ])
};