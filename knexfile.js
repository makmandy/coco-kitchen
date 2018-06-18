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
      host: process.env.DB_HOST,
      user: 'cocokitchen',
      password: process.env.DB_PASSWORD,
    },
  },
};