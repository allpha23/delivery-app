const { sale, salesProduct, user, product } = require('../database/models');

const create = async (data) => {
  const { userId, totalPrice, deliveryAddress, deliveryNumber, sellerId, productsIds } = data;
  const result = await sale.create({
    userId,
    totalPrice,
    deliveryAddress,
    deliveryNumber,
    status: 'pendente',
    sellerId,
  });

  Promise.all(productsIds.map(async (p, i) => {
    await salesProduct.create({
      saleId: result.id,
      productId: p,
      quantity: data.quantity[i],
    });
  }));

  return result;
};

const getByUserId = async (id) => {
  const result = await sale.findAll({
    where: { userId: id },
    include: [
      { model: user, as: 'Seller', attributes: { exclude: ['password'] } },
      {
        model: product,
        as: 'products',
        through: { attributes: { include: ['quantity'] } },
      },
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

const getSaleById = async (id) => {
  const [result] = await sale.findAll({
    where: { id },
    include: [
      { model: user, as: 'Seller', attributes: { exclude: ['password'] } },
      {
        model: product,
        as: 'products',
        through: { attributes: { include: ['quantity'] } },
      },
    ],
  });
  return result;
};

module.exports = { create, getByUserId, getAll, update, getSaleById };
