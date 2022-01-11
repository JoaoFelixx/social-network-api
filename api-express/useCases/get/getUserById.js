const { UserService } = require('../../services');

async function getUserById(_id) {
  try {
    const user = UserService.getUserById(_id);

    return !user ? false : user;

  } catch (err) {
    throw new Error(err);
  }
}

module.exports = getUserById;