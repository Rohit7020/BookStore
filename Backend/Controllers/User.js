let bcrypt = require("bcrypt");
let jwt = require("jsonwebtoken");
const UsrMdl = require("../Models/User");

//Registration
let Register = async (req, res) => {
  let result = await UsrMdl.findById({ _id: req.body._id });
  if (result) {
    res.send("User Already Registered");
  } else {
    let pwdhash = await bcrypt.hash(req.body.Pwd, 10);
    let newdata = { ...req.body, Pwd: pwdhash };

    let data = new UsrMdl(newdata);
    data
      .save()
      .then(() => {
        res.send("Successfully Registered");
      })
      .catch((err) => {
        console.log(err);
      });
  }
};

//login
let Login = async (req, res) => {
  let result = await UsrMdl.findById({ _id: req.body._id });
  if (result) {
    let response = await bcrypt.compare(req.body.Pwd, result.Pwd);
    if (response) {
      let token = jwt.sign({ _id: req.body._id }, "Aalaka");
      res.send({ token: token });
    } else {
      res.send("Inavlid Password");
    }
  } else {
    res.send("User not Found!!!");
  }
};

// Authentication
const isAuth = (req, res, next) => {
  console.log(req.headers);
  try {
    const rs = jwt.verify(req.headers.authorization, "Aalaka");
    if (rs) {
      next();
    }
  } catch (er) {
    res.end("pls provide valid token!!!");
  }
};

// Autherization
let isAdmin = async (req, res, next) => {
  let data = await UsrMdl.findById({ _id: req.headers._id });
  if (data.role == "admin") {
    next();
  } else {
    res.end("you are not allowed");
  }
};

module.exports = { Register, Login, isAdmin, isAuth };
