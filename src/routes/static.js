const express = require("express");
// get a router instance from our express app
const router = express.Router();

const staticController = require("../controllers/staticController");

// we define our static routes here
router.get("/", staticController.index);

module.exports = router;
