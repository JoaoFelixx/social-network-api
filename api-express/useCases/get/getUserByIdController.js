const getUserById = require('./getUserById');

async function getUserByIdController(request, response) {
  try {
    if (typeof request.params._id != 'string') return response.sendStatus(400);
    
    const userExists = await getUserById(request.params._id);

    if (!userExists) return response.sendStatus(204);

    userExists.password = ''; // por algum motivo não consigo usar a função delete

    return response.status(200).json({ result: userExists });

  } catch (err) {
    return response.sendStatus(409);
  } 
}

module.exports = getUserByIdController;