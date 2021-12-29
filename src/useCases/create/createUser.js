const { UserService } = require('../../services');

async function createUser(user) {
  try {
    const errors = [];

    const [
      existsEmail,
      existsNickname,
    ] = await Promise.all([
      UserService.existsEmail(user.email),
      UserService.existsNickname(user.nickname)
    ]);

    if (existsEmail) errors.push('Email already exists');

    if (existsNickname) errors.push('Nickname already exists');

    if (errors.length > 0) return { hasError: true, errors };

    await UserService.create(user);

    return { hasError: false, errors };

  } catch (err) {
    throw new Error(err)
  }
}

module.exports = createUser;