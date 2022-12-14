const express = require('express');
const saleController = require('../controllers/saleController');
const validateUpdate = require('../middlewares/validateSale');
const authorization = require('../middlewares/authorization');

const route = express.Router();

route.post('/', authorization, saleController.create);
route.get('/', saleController.getAll);
route.get('/:id', saleController.getSaleById);
route.get('/user/:id', saleController.getById);
route.get('/seller/:id', saleController.getSaleBySellerId);
route.patch('/:id', validateUpdate, saleController.update);
module.exports = route;
