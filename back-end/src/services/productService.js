const { product } = require('../database/models');
const AppError = require('../error/AppError');

const create = async (data) => {
  const find = await product.findOne({ where: { name: data.name } });
  if (find) throw new AppError('product aleready registered', 404);
  const result = await product.create(data);
  return result;
};
//alguma coisa
const getAll = async () => {
  const result = await product.findAll();
  return result;
};

module.exports = { create, getAll };