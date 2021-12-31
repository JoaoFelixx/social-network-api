const Sequelize = require('sequelize');
const { postgres } = require('../connections');

const Users = postgres.define('Users', {
  _id: {
    type: Sequelize.STRING,
    allowNull: false,
    primaryKey: true,
  },

  nickname: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },

  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },

  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Users;