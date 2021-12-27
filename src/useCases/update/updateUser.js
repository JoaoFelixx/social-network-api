const { UserService } = require('../../services');

async function updateUser(user) {
  try {
    const errors = [];

    const [
      existsEmail,
      existsNickname,
    ] = await Promise.all([
      UserService.existsEmail(user.email),
      UserService.existsNickname(user.nickname)
    ])

    if (existsEmail) errors.push('Email already exists');

    if (existsNickname) errors.push('Nickname already exists');

    if (errors.length > 0) return errors;

    await UserService.update(user);

    return true;
  } catch (err) {
    throw new Error(err);
  }
}

module.exports = updateUser;