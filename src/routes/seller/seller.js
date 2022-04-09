const express = require("express");
const router = new express.Router();
const users = require("../../models/users");
const mealProviders = require("../../models/mealProviders");
const dishes = require("../../models/dishes");
router.get("seller/hello", (req, res) => {
  res.send("hi");
});
module.exports = router;
