const connection = require('../knexfile.js').production;

const knex = require('knex')(connection);
console.log('connection:', connection.connection.host);

module.exports = knex;

knex.migrate.latest(connection);