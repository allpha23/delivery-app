const userService = require('../services/userService');

const create = async (req, res, next) => {
  try {
    const data = req.body;
    const result = await userService.create(data);
    return res.status(201).json(result);
  } catch (e) {
    next(e);
  }
};

module.exports = {
  create,
};
