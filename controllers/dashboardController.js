const express = require("express");
const router = express.Router();
const axios = require("axios");
const cors = require("cors");
const app = express();
const log4js = require("log4js");
const logger = log4js.getLogger();
const session = require("express-session");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const md5 = require("md5");
const nodemailer = require("nodemailer");
const db = require("../models/index");
const sequelize = db.sequelize;
const Users = db.UsersDB;
const UsersModel = require("../models/sales/index");
const env = require("../config/env");
const configVariable = require("../config/configVariable");
const log = require("../middleware/logger");
const saltRounds = env.saltRounds;
const lang = require("../lang/lang_app");
const con = require("../config/mysql");
const icoModel = require("../models/icopenh/index");
const luckyModel = require("../models/luckyWheel/awardWinner");

exports.getLuckyWheelController = async (req, res, next) => {
  if (req.session.f_login_name) {
    console.log(req.session.f_login_name);
    luckyModel
      .findAll()
      .then((results) => {
        icoModel.findAll()
        .then((result) => {
          res.render(configVariable.dashboardPage, {
            title: env.appTitle,
            titles: lang.Tilte,
            logo: env.logo_app,
            company_name: env.company_name,
            messages: lang.messagesboxs,
            luckyData: results,
            luckyData1: result,
            data: {
              name:  req.session.f_name,
              lastname: req.session.f_lastname,
              f_company:  req.session.f_company ,
              f_department: req.session.f_department,
              f_position: req.session.f_position,
              f_accounttype: req.session.f_accounttype,
              f_company: req.session.f_company,
            },
          });
        })
      })
      .catch((err) => {
        res.render(configVariable.homePage, {
          title: env.appTitle,
          logo: env.logo_app,
          company_name: env.company_name,
          messages: lang.userNotLucky,
        });
      });
  }
};
exports.dashboardController = (req, res, next) => {};
