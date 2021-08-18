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
	creation_date:{
        type: 'TIMESTAMP',
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
        allowNull: false
    }
}, {
    timestamps: false,
    // disable the modification of table names; By default, sequelize will automatically
    // transform all passed model names (first parameter of define) into plural.
    freezeTableName: true,
});

module.exports = {
    chronometer
}