const { sale } = require('../database/models');

const create = async (data) => {
  const { userId, totalPrice, deliveryAddress, deliveryNumber, saleDate, status, sellerId } = data;
  const result = await sale.create(
    { userId, totalPrice, deliveryAddress, deliveryNumber, saleDate, status, sellerId },
);
  return result;
};

const getById = async (id) => {
  const result = await sale.findAll({
    where: { userId: id },
  });
  return result;
};

const getAll = async () => {
  const result = await sale.findAll();
  return result;
};

module.exports = { create, getById, getAll };
