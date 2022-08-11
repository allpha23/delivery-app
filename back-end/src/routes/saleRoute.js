const express = require('express');
const saleController = require('../controllers/saleController');

const route = express.Router();

route.post('/', saleController.create);
route.get('/', saleController.getAll);
route.get('/:id', saleController.getById);

module.exports = route;
