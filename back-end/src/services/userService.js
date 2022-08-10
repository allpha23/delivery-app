const md5 = require('md5');
const AppError = require('../error/AppError');
const { user } = require('../database/models');
const loginService = require('./loginService');
const { Op } = require('sequelize');

const create = async (data) => {
  // const find = await user.findOne({ where: { email: data.email } });
  // const find2 = await user.findOne({ where: { name: data.name } });
  const find = await user.findOne({ where: { [Op.or]: [{email: data.email}, {name: data.name}] } });
  if (find) throw new AppError('user already registered', 409);
  const password = md5(data.password);
  const { name, email, role } = await user.create({ ...data, password });
  const { token } = await loginService.login(data.email, data.password);

  return { 
    name,
    email,
    role,
    token,
  };
};

module.exports = { create };