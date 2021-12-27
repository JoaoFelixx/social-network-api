const { UserRepository } = require('../repositories');

const userRepository = new UserRepository();

class UserService {
  static async create(user) {
    return await userRepository.create(user);
  }

  static async delete(_id) {
    return await userRepository.delete(_id);
  }

  static async update({ _id, user }) {
    return await userRepository.update({_id, user});
  }
  
  static async getUserById(_id) {
    return await userRepository.getUserById(_id);
  }

  static async existsNickname(nickname) {
    return await userRepository.existsNickname(nickname);
  }

  static async existsEmail(email) {
    return await userRepository.existsEmail(email);
  }
}

module.exports = UserService;