const Joi = require('joi');
const AppError = require('../error/AppError');

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

const validateLogin = (req, _res, next) => {
  const { error } = loginSchema.validate(req.body);
  if (error) throw new AppError(error.message);
  next();
};

module.exports = validateLogin;
