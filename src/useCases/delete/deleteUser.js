const { UserService } = require('../../services')

async function deleteUser(_id) {
  try {
    const userExists = await UserService.getUserById(_id)

    if (!userExists) return false;

    await UserService.delete(_id);

    return true;
    
  } catch (err) {
    throw new Error(err)
  }
}

module.exports = deleteUser;