async function createUserController(request, response) {
  response.json({ message: 'User created with successful' });
} 

module.exports = createUserController;