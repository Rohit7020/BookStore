let express = require("express");
const { upload, Savedata, Get } = require("../Controllers/Books");
const { isAuth, isAdmin } = require("../Controllers/User");
let route = new express.Router();

route.post("/save",  isAuth, isAdmin,upload.single("img"), Savedata);
route.get("/get", Get);

module.exports = route;
