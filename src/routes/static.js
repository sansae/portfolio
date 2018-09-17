const express = require("express");
// get a router instance from our express app
const router = express.Router();

const staticController = require("../controllers/staticController");

router.get("/", staticController.index);

router.post("/sendEmail", staticController.sendEmail);

module.exports = router;
