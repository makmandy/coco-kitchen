exports.up = (knex, Promise) => {
  return Promise.all([
    knex.schema.createTable('ingredients', (table) => {
      table.increments('id').primary();
      table.string('name');
      table.integer('count').defaultTo(0);
    }),
    knex.schema.createTable('recipes', (table) => {
      table.increments('id').primary();
      table.string('name');
      table.string('href');
      table.string('thumbnail');
      table.string('ingredients');
    })
  ]);
};

exports.down = (knex, Promise) => {
  return Promise.all([
    knex.schema.dropTableIfExists('ingredients'),
    knex.schema.dropTableIfExists('recipes'),
    // knex.schema.dropTableIfExists('ingredients_recipes')
  ]);
};