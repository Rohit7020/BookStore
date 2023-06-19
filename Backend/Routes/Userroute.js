let express = require("express");
const { Register, Login } = require("../Controllers/User");
let userroute = new express.Router();

userroute.post("/add", Register);
userroute.post("/login", Login);

module.exports = userroute;
