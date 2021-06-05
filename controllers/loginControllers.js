var express = require("express");
var router = express.Router();
const axios = require("axios");
const cors = require("cors");
var app = express();
const log4js = require("log4js");
const log = log4js.getLogger();
const logger = require("morgan");
var session = require("express-session");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
var md5 = require("md5");
const nodemailer = require("nodemailer");
const db = require("../models/index");
const sequelize = db.sequelize;
const env = require("../config/env");
const configVariable = require("../config/configVariable");
const saltRounds = env.saltRounds;
const lang = require("../lang/lang_app");
const con = require("../config/mysql");
const UserModel = require("../models/user/index");
let tsData = Date.now();

exports.registerController = async (req, res, next) => {
  console.log(req.body);
  if (req.body.f_email == "" || req.body.f_username == "") {
    res.render(configVariable.homePage, {
      title: env.appTitle,
      logo: env.logo_app,
      company_name: env.company_name,
      messages: lang.messagesInputTextBox,
    });
    if (req.body.f_username == "" && req.body.f_email == "") {
      res.render(configVariable.homePage, {
        title: env.appTitle,
        logo: env.logo_app,
        company_name: env.company_name,
        messages: lang.messagesInputTextBox,
      });
    } else {
      const passwordData = md5(req.body.f_password) + salt;
      bcrypt
        .hash(req.body.f_password, saltRounds)
        .then((hash) => {
          const Users = new UserModel();
        })
        .catch();
    }
  } else {
  }
};

exports.authController = async (req, res, next) => {
  console.log("SingIN");
  res.json("SingIn");
};

exports.loginController = (req, res, next) => {};
