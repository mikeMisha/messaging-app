const Sequelize = require("sequelize");
config = {
	host: "localhost",
	port: "5432",
	dialect: "postgres",
};

const db = new Sequelize(
	"messenger",
	"superuser",
	"1234",
	(config = {
		host: "localhost",
		port: "5432",
		dialect: "postgres",
	})
);

0;

module.exports = db;
