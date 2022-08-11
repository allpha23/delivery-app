const { sale, salesProduct, user, product } = require('../database/models');

const create = async (data) => {
  const { userId, totalPrice, deliveryAddress, deliveryNumber, saleDate, sellerId } = data;
  const result = await sale.create(
    { userId, totalPrice, deliveryAddress, deliveryNumber, saleDate, status: 'pendente', sellerId },
  );

  await salesProduct.create({
    saleId: result.id,
    productId: data.productId,
    quantity: data.quantity,
  });

  return result;
};

const getById = async (id) => {
  const result = await sale.findAll({
    where: { userId: id },
    include: [
      { model: user, as: 'Seller', attributes: { exclude: ['password'] } },
      { model: product, as: 'products', through: { attributes: { include: ['quantity'] } } },
  ],
  });
  return result;
};

const getAll = async () => {
  const result = await sale.findAll();
  return result;
};

const update = async (data, id) => {
  await sale.update({ status: data.status }, { where: { id } });
  return { message: 'update successfully' };
};

module.exports = { create, getById, getAll, update };
