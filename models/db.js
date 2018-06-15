const connection = require('../knexfile.js').development;

const knex = require('knex')(connection);


module.exports = knex;

knex.migrate.latest(connection);