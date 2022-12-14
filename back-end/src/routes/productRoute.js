const express = require('express');
const productController = require('../controllers/productController');
// const validateUser = require('../middlewares/validateUser');

const route = express.Router();

route.post('/', productController.create);
route.get('/', productController.getAll);
route.get('/:id', productController.getById);

module.exports = route;
