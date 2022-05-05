const express = require("express");
const cats = require("./routes/cats");
const home = require("./routes/home");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
const logger = require("./middelware/logger");
const authenticator = require("./middelware/authenticator");

app.use(cors());
app.use(express.json());
app.use(logger);
app.use(authenticator);
app.use("/api/cats", cats);
app.use("/", home);

app.use((req, res, next) => {
  console.log("Authenticating user.....");
  next();
});

app.use((req, res, next) => {
  console.log("login user details");
  next();
});

app.listen(5000, () => {
  console.log("Listening on port 5000");
});

mongoose
  .connect("mongodb://localhost/cattylovedb", { useNewUrlParser: true })
  .then(() => {
    console.log("Connected to db successfully ....");
  })
  .catch((err) => console.log(err));
