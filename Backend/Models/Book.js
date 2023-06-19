const mongoose = require("mongoose");

const Sch = new mongoose.Schema({
  _id: String,
  Bname: String,
  Author: String,
  Publisher: String,
  Price: Number,
  img: String,
  Rating: Array,
});

const Bookmdl = mongoose.model("Books", Sch);
module.exports = Bookmdl;
