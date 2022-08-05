const loginService = require('../services/loginService');

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const result = await loginService.login(email, password);
    return res.status(200).json(result);
  } catch (e) {
    next(e);
  }
};

module.exports = {
  login,
};
