// initialize express app
const express = require("express");
const app = express();

const routeConfig = require("./config/route-config.js");
const appConfig = require("./config/main-config.js");

routeConfig.init(app);
appConfig.init();

// export our app so we can pass it to our node server
// in server.js
module.exports = app;
