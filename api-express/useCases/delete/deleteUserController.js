const { UserEntity } = require('../../entities');
const deleteUser = require('./deleteUser');

async function deleteUserController(request, response) {
  try {
    if (typeof request.params._id != 'string') return response.sendStatus(400);

    const userHasBeenDeleted = await deleteUser(request.params._id);

    if (!userHasBeenDeleted) return response.sendStatus(204);

    return response.sendStatus(202);
  } catch (err) {
    return response.sendStatus(409);
  }
}

module.exports = deleteUserController;