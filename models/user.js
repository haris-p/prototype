const {Sequelize, DataTypes} = require('sequelize');
const sequelize = require('../util/database');

const User = sequelize.define('user', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    name: {
        type: DataTypes.STRING,
        allowNull: false
    },

    email: {
        type: DataTypes.STRING,
        allowNull: false
    },

    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    
    phoneNumber: {
        type: DataTypes.INTEGER,
        allowNull: false 
    },

    address: {
        type: DataTypes.STRING,
        allowNull: false
    },

    zipCode: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = User;