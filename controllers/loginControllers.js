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
const { response } = require("express");
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
    }
  } else {
  }
};

exports.authController = async (req, res, next) => {
  //console.log(req.body);
  if (req.body.f_password == "" && req.body.f_email == "") {
    console.log(req.body);
    res.render(configVariable.homePage, {
      title: env.appTitle,
      logo: env.logo_app,
      company_name: env.company_name,
      messages: lang.messagesInputTextBox,
    });
  } else {
    try {
      let payload = {
        email: req.body.f_email,
        password: req.body.f_password,
      };
      console.log(payload);
      axios.post(env.restfulAPI + "/api/users", payload).then((response) => {
        console.log(" Login OK");
        if (response.data.messagesboxs == "Success") {
          req.session.f_acc_code = response.data.result.f_acc_code;
          req.session.f_login_name = response.data.result.f_login_name;
          req.session.f_name = response.data.result.f_name;
          req.session.f_lastname = response.data.result.f_lastname;
          req.session.f_department = response.data.result.f_department;
          req.session.f_company = response.data.result.f_company;
          req.session.f_accounttype = response.data.result.f_accounttype;
          req.session.f_admin_status = response.data.result.f_admin_status;
          req.session.f_position = response.data.result.f_position;
          req.session.f_pic = response.data.result.f_pic;
          req.session.auth = response.data.auth;
          req.session.token = response.data.token;
          res.render(configVariable.dashboardPage, {
            title: env.appTitle,
            logo: env.logo_app,
            company_name: env.company_name,
            messages: lang.messagesboxs,
          });
        } else {
          console.log('Login not OK')
          res.render(configVariable.homePage, {
            title: env.appTitle,
            logo: env.logo_app,
            company_name: env.company_name,
            messages: lang.messagesInputTextBox,
          });
        }
      });
    } catch (err) {
      res.render(configVariable.homePage, {
        title: env.appTitle,
        logo: env.logo_app,
        company_name: env.company_name,
        messages: err,
      });
    }
  }
};

exports.loginController = (req, res, next) => {};
