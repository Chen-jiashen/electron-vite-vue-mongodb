const mongoose = require("mongoose");

const MONGODB_URI = "mongodb://127.0.0.1:27017/db_electron"
mongoose
  .connect(MONGODB_URI)
  .then((db) => console.log("=> MongoDB is connected "))
  .catch((err) => console.log(err));
