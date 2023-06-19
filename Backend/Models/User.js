let mongoose = require("mongoose");
let UsrSch = new mongoose.Schema({
  _id: String,
  Name: String,
  Pwd: String,
  Phno: String,
  role: {
    type: String,
    default: "admin",
  },
});

let UsrMdl = mongoose.model("User", UsrSch);
module.exports = UsrMdl;
