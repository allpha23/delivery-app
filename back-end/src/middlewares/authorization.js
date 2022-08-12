const jwt = require('jsonwebtoken');
const fs = require('fs');
const AppError = require('../error/AppError');

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization;
    
    if (!token) {
      throw new AppError('Token not found');
    }
      
    const SECRET = fs.readFileSync(`${__dirname}/../../jwt.evaluation.key`, { encoding: 'utf-8' });
    jwt.verify(token, SECRET);

     next();  
  } catch (error) {
    throw new AppError('Expired or invalid token', 401);
  }
};