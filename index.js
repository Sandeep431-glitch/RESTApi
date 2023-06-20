const express = require("express");
const port = process.env.PORT || 8000;
const cors = require("cors");
const db = require("./config/mongoose");
const app = express();

db();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", require("./routes"));

app.listen(port, function (err) {
  if (err) {
    console.log(err);
  }
  console.log(`Server is running on ${port}`);
});
