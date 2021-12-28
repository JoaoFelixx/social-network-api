const { authUserController } = require('./auth');
const { createUserController } = require('./create');
const { deleteUserController } = require('./delete');
const { updateUserController } = require('./update');
const { getUserByIdController } = require('./get');
const { sendMessageController } = require('./message');

module.exports = {
  authUserController,
  createUserController,
  deleteUserController,
  updateUserController,
  getUserByIdController,
  sendMessageController,
}