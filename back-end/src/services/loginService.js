const { user } = require('../database/models');

const login = async (email, password) => {
  const users = await user.findAll({ where: {
    email,
    password,
  } });

  return users; 
};

module.exports = { login };