const AppError = require('../error/AppError');

const errorMiddleware = (err, req, res, _next) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({ message: err.message });
  }
  return res.status(500).json({ message: 'Internal server error' });
};

module.exports = errorMiddleware;
