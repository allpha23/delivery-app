const { getAll } = require("../services/loginService");

const login = async (req, res) => {
  const { email, password } = req.body;
  const result = await getAll(email, password);
  return res.status(200).json(result);
};

module.exports = {
  login,
};
