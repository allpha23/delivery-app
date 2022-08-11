const express = require('express');
const cors = require('cors');
const errorMiddleware = require('../middlewares/error');
const loginRoute = require('../routes/loginRoute');
const userRoute = require('../routes/userRoute');
const productRoute = require('../routes/productRoute');
const saleRoute = require('../routes/saleRoute');

const app = express();
app.use(express.json());
app.use(cors());
app.use('/login', loginRoute);
app.use('/user', userRoute);
app.use('/product', productRoute);
app.use('/sale', saleRoute);
app.use(express.static('public'));

app.use(errorMiddleware);

app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
