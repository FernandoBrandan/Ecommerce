// import * as authJwt from "./authJwt";
// import * as verifySingup from "./verifySingup";

const express = require("express");
const session = require("express-session");
const path = require("path");
const env = require("dotenv").config();

const setupMiddlewares = (app) => {
  /**
   * Basicos express
   */
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));

  /**
   * Ejs
   */
  app.set("view engine", "ejs");
  app.set("views", path.join(__dirname, "../views"));

  /**
   * Globals
   */
  app.use(express.static(path.join(__dirname + "./../public")));

  /**
   * Sessions
   */

  app.use(
    session({
      resave: false,
      saveUninitialized: false,
      secret: process.env.SESSION_SECRET,
      // VER _ cookie: { maxAge: oneDay },
      // VER _ store: new MongoStore({mongooseConnection: mongoose.connection })
    })
  );

  /**
   * Cookies
   */
  // authmiddleware.init();
  // app.use(authmiddleware.protectWithJwt);
};

exports.setupMiddlewares = setupMiddlewares;
