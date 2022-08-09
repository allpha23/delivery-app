const md5 = require('md5');
const { user } = require('../database/models');
const jwt = require('../utils/jwtGenerator');
const AppError = require('../error/AppError');

const login = async (email, password) => {
  const [users] = await user.findAll({ where: { email } });

  if (!users) throw new AppError('User not found', 404);

  const hash = md5(password);

  if (hash !== users.password) throw new AppError('Invalid Password', 400);

  delete users.password;

  const token = jwt(users);
  
  return { name: users.name, token };
};

module.exports = { login };
