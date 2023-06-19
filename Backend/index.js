let express = require("express");
let mongoose = require("mongoose");
let app = express();
app.use(express.json());
let cors = require("cors");
app.use(cors());
let bodyParser = require("body-parser");
const route = require("./Routes/Bookroute");
const userroute = require("./Routes/Userroute");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/img", express.static("img"));
mongoose
  .connect("mongodb://127.0.0.1:27017/Book", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connection ok");
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/", route);
app.use("/", userroute);

app.listen(7000);
