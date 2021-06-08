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
const icoModel = require("../models/icopenh/index");
const luckyModel = require("../models/luckyWheel/awardWinner");
const { response } = require("express");
let tsData = Date.now();

exports.registerController = async (req, res, next) => {
  res.redirect("/");
};

exports.authController = async (req, res, next) => {
  //console.log(req.body);
  if (req.body.f_password == "" && req.body.f_email == "") {
    //  console.log(req.body);
    res.redirect("/");
  } else {
    // console.log(req.body);
    if (req.body.f_email !== "" && req.body.f_password !== "") {
      try {
        let payload = {
          email: req.body.f_email,
          password: req.body.f_password,
        };
        // console.log(payload);
        axios.post(env.restfulAPI + "/api/users", payload).then((response) => {
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
            icoModel.findAndCount().then((resultCustomer) => {
              const countCustomer = resultCustomer;
              luckyModel.findAndCount().then((resultLucky) => {
                const countLucky = resultLucky;
                luckyModel
                .findAll()
                .then((results) => {
                  icoModel.findAll().then((result) => {
                    console.log(req.session.f_login_name);
                    res.render(configVariable.dashboardPage, {
                      title: env.appTitle,
                      titles: lang.Tilte,
                      logo: env.logo_app,
                      company_name: env.company_name,
                      messages: lang.messagesboxs,
                      luckyData: results,
                      luckyData1: result,
                      countCustomer: countCustomer,
                      countLucky: countLucky,
                      data: {
                        name: response.data.result.f_name,
                        lastname: response.data.result.f_lastname,
                        f_company: response.data.result.f_company,
                        f_department: response.data.result.f_department,
                        f_position: response.data.result.f_position,
                        f_accounttype: response.data.result.f_accounttype,
                        f_company: response.data.result.f_company,
                      },
                    });
                  });
                })
                .catch((err) => {
                  res.render(configVariable.homePage, {
                    title: env.appTitle,
                    logo: env.logo_app,
                    company_name: env.company_name,
                    messages: lang.userNotLucky,
                  });
                });
              });
            });
          } else {
            //  console.log("Login not OK");
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
    } else {
      res.redirect("/");
    }
  }
};

exports.loginController = (req, res, next) => {};
