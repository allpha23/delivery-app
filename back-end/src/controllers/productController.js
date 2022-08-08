const productService = require('../services/productService');

const create = async (req, res, next) => {
  try {
    const data = req.body;
    const result = await productService.create(data);
    return res.status(201).json(result);
  } catch (e) {
    next(e);
  }
};

const getAll = async (_req, res, next) => {
  try {
    const result = await productService.getAll();
    return res.status(200).json(result);
  } catch (e) {
    next(e);
  }
};

module.exports = { create, getAll };