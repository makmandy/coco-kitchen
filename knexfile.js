module.exports = {
  development: {
    client: 'mysql',
    connection: {
      host: 'localhost',
      user: 'root',
      database: 'cocokitchen',
    },
  },
  production: {
    client: 'mysql',
    connection: {
      host: DB_HOST,
      user: DB_USER,
      password: DB_PASSWORD,
    },
  },
};