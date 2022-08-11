const saleService = require('../services/saleService');

const create = async (req, res, next) => {
  try {
    const result = await saleService.create(req.body);
    return res.status(201).json(result);
  } catch (e) {
    next(e);
  }
};

const getAll = async (_req, res, next) => {
  try {
    const result = await saleService.getAll();
    return res.status(200).json(result);
  } catch (e) {
    next(e);
  }
};
const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await saleService.getById(+id);
    return res.status(200).json(result);
  } catch (e) {
    next(e);
  }
};
const update = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await saleService.update(req.body, +id);
    return res.status(200).json(result);
  } catch (e) {
    next(e);
  }
};

module.exports = { create, getAll, getById, update };
