const { createUserController } = require('./create');
const { deleteUserController } = require('./delete');
const { updateUserController } = require('./update');
const { sendMessageController } = require('./message');
const { 
  getUserByIdController,
  getUserByNicknameController, 
} = require('./get');

module.exports = {
  createUserController,
  deleteUserController,
  updateUserController,
  sendMessageController,
  getUserByIdController,
  getUserByNicknameController,
}