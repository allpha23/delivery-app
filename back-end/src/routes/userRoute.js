const express = require('express');
const userController = require('../controllers/userController');
const validateUser = require('../middlewares/validateUser');

const route = express.Router();

route.post('/', validateUser, userController.create);

module.exports = route;
