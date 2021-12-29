const jwt = require('jsonwebtoken');
const { promisify } = require('util');
const { SECRET_KEY_JWT } = require('../../secret');

async function authUser(_id) {
  try {
    const token = await promisify(jwt.sign)({ _id }, SECRET_KEY_JWT, { expiresIn: '1d' });

    return await token;
    
  } catch (err) {
    throw new Error(err);
  } 
} 

module.exports = authUser;