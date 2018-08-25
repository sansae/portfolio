const express = require("express");
// get a router instance from our express app
const router = express.Router();

// we define our static routes here
router.get("/", (req, res, next) => {
  res.send("Kent's Portfolio");
});

module.exports = router;
