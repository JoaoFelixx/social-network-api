const { authUserController } = require('./auth');
const { createUserController } = require('./create');
const { deleteUserController } = require('./delete');
const { updateUserController } = require('./update');
const { getUserByIdController } = require('./get');

module.exports = {
  authUserController,
  createUserController,
  deleteUserController,
  updateUserController,
  getUserByIdController,
}