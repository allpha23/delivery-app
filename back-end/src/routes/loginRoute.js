const express = require('express');
const loginController = require('../controllers/loginController');
const validateLogin = require('../middlewares/validateLogin');

const route = express.Router();

route.post('/', validateLogin, loginController.login);

module.exports = route;
