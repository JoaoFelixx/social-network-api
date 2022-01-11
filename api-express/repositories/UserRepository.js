const { Users } = require('../models');

class UserRepository {
  
  async getUserById(_id) {
    return await Users.findByPk(_id);
  }
  
  async getByNickname(nickname) {
    return await Users.findOne({ where: { nickname } });
  }

  async getByEmail(email) {
    return await Users.findOne({ where: { email } });
  }
  
  async create(user) {
    return await Users.create(user);
  }

  async delete(_id) {
    return await Users.destroy({ where: { _id } });
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
}

module.exports = UserRepository;