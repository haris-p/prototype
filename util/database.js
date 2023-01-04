const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('toko-online', 'root', 'password', {
    dialect: 'mysql', 
    host: 'localhost'
});

module.exports = sequelize;