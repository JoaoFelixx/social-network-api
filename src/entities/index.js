const { randomUUID } = require('crypto');
const bcrypt = require('bcryptjs');

class User {
  constructor ({ _id, email, password, nickname }) {
    this._id = !_id ? randomUUID() : _id;
    this.email = email;
    this.nickname = nickname;
    this.password = bcrypt.hashSync(password, 8)
  }

  isValidUser() {
    
  } 
}

module.exports = User;