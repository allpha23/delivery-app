const { product } = require("../database/models");
const AppError = require("../error/AppError");

const create = async (data) => {
  const { name, price, url_image } = data;
  const find = await product.findOne({ where: { name } });
  if (find) throw new AppError("product aleready registered", 404);
  const result = await product.create({ name, price, url_image });
  return result;
};

const getAll = async () => {
  const result = await product.findAll();
  return result;
};

const getById = async (id) => {
  const result = await product.findByPk(id)
  return result;
}

module.exports = { create, getAll, getById };
