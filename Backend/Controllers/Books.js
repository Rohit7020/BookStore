const multer = require("multer");
let uuid = require("uuid");
const Bookmdl = require("../Models/Book");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./img");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + "." + file.mimetype.split("/")[1]
    );
  },
});

const upload = multer({ storage: storage });

let Savedata = (req, res) => {
  let data = { _id: uuid.v4(), img: req.file.filename, ...req.body };
  let mdata = new Bookmdl(data);
  mdata
    .save()
    .then(() => {
      res.send("Data Saved!!!");
    })
    .catch((err) => {
      console.log(err);
    });
};

let Get = async (req, res) => {
  let data = await Bookmdl.find();
  res.json(data);
};
module.exports = { upload, Savedata, Get };
