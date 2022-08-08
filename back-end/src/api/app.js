const express = require('express');
const cors = require('cors');
const errorMiddleware = require('../middlewares/error');
const loginRoute = require('../routes/loginRoute');

const app = express();
app.use(express.json());
app.use(cors());
app.use('/login', loginRoute);

app.use(errorMiddleware);

app.get('/coffee', (_req, res) => res.status(418).end());

module.exports = app;
