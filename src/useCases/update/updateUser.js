const { UserService } = require('../../services');

async function updateUser(user) {
  try {
    const userExists = await UserService.getUserById(user._id);

    if (!userExists) return false;

    return await UserService.update(user);

  } catch (err) {
    throw new Error(err);
  }
}

module.exports = updateUser;