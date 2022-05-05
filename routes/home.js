const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("You have succesfully connected to our API");
});

module.exports = require;
