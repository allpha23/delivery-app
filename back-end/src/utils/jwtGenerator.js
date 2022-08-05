const jwt = require('jsonwebtoken'); 
require('dotenv').config();

const SECRET = process.env.JWT_SECRET || 'jwt_secret';

const jwtConfig = {
  expiresIn: '1d',
};

module.exports = (data = {}) => jwt.sign({ data }, SECRET, jwtConfig);