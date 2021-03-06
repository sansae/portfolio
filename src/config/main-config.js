// dotenv is a Node package that helps with handling environment variables for our dev env
// when dotenv is configured, it will look for a file called .env in the root of the app and load those variables into memory
// use dotenv when storing sensitive information such as user credentials
require("dotenv").config();
// we need to include the path so that our app knows where to find the views
const path = require("path");
const viewsFolder = path.join(__dirname, "..", "views");
const bodyParser = require("body-parser");
const expressValidator = require("express-validator");
const session = require("express-session");
const flash = require("express-flash");
const express = require("express");

module.exports = {
  init(app, express) {
    // set the path where the templating engine will find the views
    app.set("views", viewsFolder);
    // mount the view
    app.set("view engine", "ejs");
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(expressValidator());

    app.use(session({
      secret: "passIsPass",
      resave: false,
      saveUninitialized: false,
      cookie: { maxAge: 1.21e+9 }
    }));

    app.use(flash());

    // tell express where to find the static assets
    app.use(express.static(path.join(__dirname, "..", "assets")));
  }
};
