const Joi = require('joi');
const AppError = require('../error/AppError');

const saleSchema = Joi.object({
  status: Joi.string().required(),
});

const validateUpdate = (req, _res, next) => {
  const { status } = req.body;
  const { error } = saleSchema.validate(req.body);

  if (error) throw new AppError(error.message);

  if (
    status === 'Preparando'
    || status === 'Em Trânsito'
    || status === 'Entregue'
  ) {
    return next();
  }

  throw new AppError('incorrect status');
};

module.exports = validateUpdate;