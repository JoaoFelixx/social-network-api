const bcrypt = require('bcryptjs');
const authUser = require('./authUser');
const { UserService } = require('../../services');

async function authUserController(request, response) {
  try {
    const { email, password } = request.body;

    const userExists = await UserService.existsEmail(email);  
    
    console.log(userExists)

    if (!userExists) return response.sendStatus(204);

    const passwordIsCorrect = await bcrypt.compare(password, userExists.password);

    if (!passwordIsCorrect) return response.status(400).json({ result: 'Email or password incorrect' });

    userExists.password = '';

    const token = await authUser(userExists._id);

    return response.status(201).json({ user: userExists, token });

  } catch (err) {
    return response.sendStatus(409);
  }
}

module.exports = authUserController;