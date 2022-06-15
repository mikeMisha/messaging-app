const Sequelize = require('sequelize');

const db = new Sequelize(process.env.DATABASE_URL, {
  logging: false,
  ssl: true,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

module.exports = db;
