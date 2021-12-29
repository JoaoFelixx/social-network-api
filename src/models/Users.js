const Sequelize = require('sequelize');
const { postgres } = require('../connections');

const Users = postgres.define('Users', {
  _id: {
    type: Sequelize.STRING,
    allowNull: false,
    primaryKey: true,
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
  nickname: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
});

module.exports = Users;