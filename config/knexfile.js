// Update with your config settings.
const { database, username, password } = require('../config');

module.exports = {
  development: {
    client: "postgresql",
    connection: {
      database,
      user:username,
      password,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};
