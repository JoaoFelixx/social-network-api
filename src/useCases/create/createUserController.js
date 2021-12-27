const { UserEntity } = require('../../entities')
const createUser = require('./createUser');

async function createUserController(request, response) {
  try {
    const regexEmail = new RegExp(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/);
    const regexNickname = new RegExp("^[a-zA-Z]+$");

    const user = new UserEntity(request.body);

    if (!regexEmail.test(user.email)) return response.status(400).json({ result: 'Email is invalid' });

    if (!regexNickname.test(user.nickname)) return response.status(400).json({ result: 'Nickname is invalid' });


    const result = await createUser(user);

    if (typeof result == 'object') return response.status(400).json({ result: result.join(',') });

    return response.sendStatus(201);

  } catch (err) {
    return response.sendStatus(409);
  }
}

module.exports = createUserController;