const md5 = require('md5');
const AppError = require('../error/AppError');
const { user } = require('../database/models');

const create = async (data) => {
  const find = await user.findOne({ where: { email: data.email } });
  const find2 = await user.findOne({ where: { name: data.name } });
  if (find || find2) throw new AppError('user already registered', 409);
  const password = md5(data.password);
  const result = await user.create({ ...data, password });
  return result;
};

module.exports = { create };