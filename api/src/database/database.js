const { Sequelize } = require("sequelize");
const { db_name, db_user, db_password, db_host, db_dialect } = require("../config");

const sequelize = new Sequelize(
  db_name,
  db_user,
  db_password,
  {
    host: db_host,
    dialect: db_dialect,
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
