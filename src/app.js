// initialize express app
const express = require("express");
const app = express();

const appConfig = require("./config/main-config.js");
const routeConfig = require("./config/route-config.js");

// when using body-parser, we must make sure to define and initialize appConfig first before we define and initialize routeConfig
appConfig.init(app, express);
routeConfig.init(app);

// export our app so we can pass it to our node server
// in server.js
module.exports = app;
