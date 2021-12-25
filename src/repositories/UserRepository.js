const { Users } = require('../models');

class UserRepository {

  async create(user) {
    try {
      return await Users.create(user);

    } catch (err) {
      console.error(err);
    }
  }

  async delete(_id) {
    try {
      return await Users.destroy({ where: { _id } });

    } catch (err) {
      console.error(err);
    }
  }

  async getUserById(_id) {
    try {
      return await Users.findByPk(_id);

    } catch (err) {
      console.error(err);
    }
  }

  async update({ _id, user }) {
    try {
      const { email, nickname, password } = user;

      const oldUser = await Users.findByPk(_id);

      oldUser.email = email;
      oldUser.nickname = nickname;
      oldUser.password = password;

      return await oldUser.save();

    } catch (err) {
      console.error(err);
    }
  }

  async existsNickname(nickname) {
    try {
      return await Users.findOne({ where: { nickname } });

    } catch (err) {
      console.error(err);
    }
  }
}

module.exports = UserRepository;