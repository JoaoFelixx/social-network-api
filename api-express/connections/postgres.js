const { Sequelize } = require('sequelize');
const { URL_POSTGRES } = require('../../secret'); 
const sequelize = new Sequelize(URL_POSTGRES, { dialect: 'postgres' });

module.exports = sequelize;