const express = require("express");
// get a router instance from our express app
const router = express.Router();

const staticController = require("../controllers/staticController");

const validation = require("./validation");

router.get("/", staticController.index);

router.post("/sendEmail", validation.validateUserInfo, staticController.sendEmail);

module.exports = router;
