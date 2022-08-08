const md5 = require('md5');
const AppError = require('../error/AppError');
const { user } = require('../database/models');

const create = async (data) => {
  const find = await user.findOne({ where: { email: data.email } });
  if (find) throw new AppError('user already registered', 404);
  const password = md5(data.password);
  const result = await user.create({ ...data, password });
  return result;
};

module.exports = { create };