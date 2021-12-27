const { randomUUID } = require('crypto');
const bcrypt = require('bcryptjs');

class UserEntity {
  constructor ({ _id, email, password, nickname }) {
    this._id = !_id ? randomUUID() : _id;
    this.email = email.toLowerCase();
    this.nickname = nickname.toLowerCase();
    this.password = bcrypt.hashSync(password, 8)
  }

  isValidUser() {

  } 
}

module.exports = UserEntity;