const jwt = require('jsonwebtoken'); 
require('dotenv').config();

const SECRET = 'secret_key'

console.log(SECRET);

const jwtConfig = {
  expiresIn: '1d',
  algorithm: 'HS256',
};

module.exports = (data = {}) => jwt.sign({ data }, SECRET, jwtConfig);