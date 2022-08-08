const Joi = require('joi');
const AppError = require('../error/AppError');

const userSchema = Joi.object({
  name: Joi.string().min(12).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  role: Joi.string().required(),
});

const validateUser = (req, _res, next) => {
  const { error } = userSchema.validate(req.body);
  if (error) throw new AppError(error.message);
  next();
};

module.exports = validateUser;
