const { Users } = require('../models');

class UserRepository {

  async create(user) {
    try {
      return await Users.create(user);

    } catch (err) {
      throw new Error(err);
    }
  }

  async delete(_id) {
    try {
      return await Users.destroy({ where: { _id } });

    } catch (err) {
      throw new Error(err)
    }
  }

  async getUserById(_id) {
    try {
      return await Users.findByPk(_id);

    } catch (err) {
      throw new Error(err)
    }
  }

  async update(user) {
    try {
      const { email, nickname, password } = user;

      const oldUser = await Users.findByPk(user._id);

      oldUser.email = email;
      oldUser.nickname = nickname;
      oldUser.password = password;

      return await oldUser.save();

    } catch (err) {
      throw new Error(err)
    }
  }

  async existsNickname(nickname) {
    try {
      return await Users.findOne({ where: { nickname } });

    } catch (err) {
      throw new Error(err)
    }
  }

  async existsEmail(email) {
    try {
      return await Users.findOne({ where: { email } });

    } catch (err) {
      throw new Error(err)
    }
  }
}

module.exports = UserRepository;