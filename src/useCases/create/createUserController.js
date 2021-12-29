const { UserEntity } = require('../../entities');
const createUser = require('./createUser');

async function createUserController(request, response) {
  try {
    const { nickname, password, email } = request.body;

    if (typeof nickname != 'string'|| typeof password != 'string' || typeof email != 'string')
      return response.sendStatus(400);

    if (!nickname.length > 0 || !password.length > 0 || !email.length > 0)
      return response.sendStatus(400);

    const regexEmail = new RegExp(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/);
    const regexNickname = new RegExp("^[a-zA-Z]+$");

    const user = new UserEntity(request.body);

    if (!regexEmail.test(user.email)) return response.status(400).json({ result: 'Email is invalid' });

    if (!regexNickname.test(user.nickname)) return response.status(400).json({ result: 'Nickname is invalid' });

    const { hasError, errors } = await createUser(user);

    if (hasError) return response.status(400).json({ result: errors.join(',') });
    
    return response.sendStatus(201);

  } catch (err) {
    return response.sendStatus(409);
  }
}

module.exports = createUserController;