exports.up = (knex, Promise) => {
  return Promise.all([
    knex.schema.createTable('ingredients', (table) => {
      table.increments();
      table.string('name');
      table.integer('count').defaultTo(0);
    }),
    knex.schema.createTable('recipes', (table) => {
      table.increments();
      table.string('name');
      table.string('href');
      table.string('thumbnail');
      table.string('ingredients');
    }),
    knex.schema.createTable('ingredients_recipes', (table) => {
      table.increments();
      table.integer('id_ingredient');
      table.integer('id_recipe');
    }),
  ]);
};

exports.down = (knex, Promise) => {
  return Promise.all([
    knex.schema.dropTableIfExists('ingredients'),
    knex.schema.dropTableIfExists('recipes'),
    knex.schema.dropTableIfExists('ingredients_recipes')
  ]);
};