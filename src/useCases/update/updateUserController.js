const { UserEntity } = require('../../entities')
const updateUser = require('./updateUser');

async function updateUserController(request, response) {
  try {
    const regexEmail = new RegExp(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/);
    const regexNickname = new RegExp("^[a-zA-Z]+$");
    
    const { nickname, password, email } = request.body;

    if (typeof nickname != 'string'|| typeof password != 'string' || typeof email != 'string')
      return response.sendStatus(400);

    if (!nickname.length > 0 || !password.length > 0 || !email.length > 0)
      return response.sendStatus(400);


    request.body._id = request.params._id;
    const user = new UserEntity(request.body);

   
    if (!regexEmail.test(user.email)) 
      return response.status(400).json({ result: 'Email is invalid' });

    if (!regexNickname.test(user.nickname)) 
      return response.status(400).json({ result: 'Nickname is invalid' });

    const userExists = await updateUser(user);

    if (!userExists) return response.status(400).json({ result: 'Id is not registered' });

    return response.sendStatus(202);

  } catch (err) {
    return response.status(409).json({ result: 'Email or/and nickname already exists' });
  }
}

module.exports = updateUserController;