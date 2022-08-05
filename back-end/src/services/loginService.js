const { user } = require('../database/models');
const AppError = require('../error/AppError');

const login = async (email, password) => {
  const users = await user.findAll({
    where: {
      email,
      password,
    },
  });

  if (!users.lenght) throw new AppError('User not found', 404);
  return users;
};

module.exports = { login };
