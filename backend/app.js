const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const fileuploader = require("express-fileupload");

const app = express();

dotenv.config();
app.use(fileuploader());
app.use(cors());
app.use(express.urlencoded());
app.use(express.json());
const PORT = process.env.PORT || 9000;

mongoose.connect(process.env.mongoDBUrl, () => {
  console.log(`Server is Up!`);
  app.listen(PORT);
});
