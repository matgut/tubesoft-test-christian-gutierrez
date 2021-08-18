const { Sequelize,DataTypes } = require("sequelize");
const { sequelize } = require('../database/database');

const chronometer = sequelize.define('chronometer', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    finish_time:{
        type: DataTypes.TIME,
        allowNull: false,
    },
    username:{
        type: DataTypes.TEXT,
        allowNull: false,
    },
    createdAt: {
        field: 'created_at',
        type: Sequelize.DATE,
    }
}, {
    timestamps: true,
    //don't want updatedAt
    updatedAt: false,
    // disable the modification of table names; By default, sequelize will automatically
    // transform all passed model names (first parameter of define) into plural.
    freezeTableName: true,
});

module.exports = {
    chronometer
}