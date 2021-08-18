const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  "TESTTUBESOFT",
  "prueba",
  "prueba",
  {
    host: "localhost",
    dialect: "postgres",
    pool: {
            max: 5,
            min: 0,
            require: 30000,
            idle: 10000 
        },
  }
);

module.exports = {
    sequelize
}
