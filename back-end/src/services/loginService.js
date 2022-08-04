const { user } = require('../database/models');

const getAll = async (email, password) => {
  const users = await user.findAll({ where: {
    email,
    password,
  } });

  return users; 
};

module.exports = { getAll };