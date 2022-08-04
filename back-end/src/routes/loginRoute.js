const express = require("express");
const { login } = require("../controllers/loginController");
const route = express.Router();

route.post("/", login);

module.exports = route
