const jwt = require('jsonwebtoken'); 
require('dotenv').config();
const fs = require('fs');

const SECRET = fs.readFileSync(`${__dirname}/../../jwt.evaluation.key`, { encoding: 'utf-8' });

console.log(SECRET);

const jwtConfig = {
  expiresIn: '1d',
  algorithm: 'HS256',
};

module.exports = (data = {}) => jwt.sign({ data }, SECRET, jwtConfig);