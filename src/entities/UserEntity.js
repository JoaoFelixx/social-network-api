const { randomUUID: uuid } = require('crypto');
const bcrypt = require('bcryptjs');

class UserEntity {
  constructor ({ _id, email, password, nickname }) {
    this._id = !_id ? uuid() : _id;
    this.email = email.toLowerCase();
    this.nickname = nickname.toLowerCase();
    this.password = bcrypt.hashSync(password, 8)
  }
}

module.exports = UserEntity;