const md5 = require('md5');
const AppError = require('../error/AppError');
const { user } = require('../database/models');
const loginService = require('./loginService');

const create = async (data) => {
  const find = await user.findOne({ where: { email: data.email } });
  const find2 = await user.findOne({ where: { name: data.name } });
  if (find || find2) throw new AppError('user already registered', 409);
  const password = md5(data.password);
  const result = await user.create({ ...data, password });
  const login = await loginService.login(data.email, data.password);

  return { 
    name: result.name,
    email: result.email,
    role: result.role,
    token: login.token,
  };
};

module.exports = { create };