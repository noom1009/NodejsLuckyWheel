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
const LuckWheel = db.LuckWheelDB;
const UsersModel = require("../models/sales/index");
const env = require("../config/env");
const configVariable = require("../config/configVariable");
const saltRounds = env.saltRounds;
const lang = require("../lang/lang_app");
const con = require("../config/mysql");
const luckyWheelModel = require("../models/luckyWheel/index");
const icopenhModel = require("../models/icopenh/index");
const ConfigWheelModel = require("../models/configWheel/index");
const awardWinnerModel = require('../models/luckyWheel/awardWinner');
const LuckyWheelModel = require('../models/luckyWheel/index');
const { restfulAPI } = require("../config/env");

exports.luckyControllers = async (req, res, next) => {
//console.log(req.body.f_idCard)
  let f_idCard = req.body.f_idCard ;
  if (req.body.f_idCard == "") {
    res.render(configVariable.homePage, {
      title: env.appTitle,
      logo: env.logo_app,
      company_name: env.company_name,
      messages: "กรุณากรอกเลขบัตรประชาชน",
    });
  } else {
    if (req.body.f_idCard !== "" && req.body.f_idCard !== null) {
      if (env.configLabelWheel == 1){
       // console.log(env.configLabelWheel)
       // console.log(env.luckyWheelLabel)
       // console.log(env.countLucky)
        axios({
          method: "get",
          url: "https://api.ipify.org?format=json",
        })
          .then((response) => {
          //  console.log(response.data.ip)
            const IPAddressClient = response.data.ip;
            icopenhModel
            .findByCardID({ f_cardid: req.body.f_idCard })
            .then((result) => {
              if (
                typeof result !== "undefined" &&
                result.length > 0 &&
                result !== ""
              ) {
                LuckyWheelModel.findIDCard({ f_cardid: req.body.f_idCard })
               .then((results) =>{
                  console.log(results)
                  if(results.length > 0){
                    console.log(req.body.f_idCard)
                    console.log(results.length)
                    res.render(configVariable.homePage, {
                      title: env.appTitle,
                      logo: env.logo_app,
                      company_name: env.company_name,
                      messages: lang.userNotLucky,
                    });
                    }else{
                      console.log('!===')
                      console.log(req.body.f_idCard)
                      console.log(results.length)
                      awardWinnerModel.findAll()
                      .then((Results) =>{
                        res.render(configVariable.luckyPage, {
                          title: env.appTitle,
                          logo: env.logo_app,
                          company_name: env.company_name,
                          messages: lang.userSuccess,
                          dataPages: result,
                          dataWheel: env.luckyWheelLabel,
                          countLucky: env.countLucky,
                          ipAddress: IPAddressClient,
                          winner: Results,
                        });
                      })
                      .catch((err) =>{
                        res.render(configVariable.homePage, {
                          title: env.appTitle,
                          logo: env.logo_app,
                          company_name: env.company_name,
                          messages: lang.userNotLucky,
                        });
                      })
                    }
                })
                .catch((err)=>{
                  res.render(configVariable.homePage, {
                    title: env.appTitle,
                    logo: env.logo_app,
                    company_name: env.company_name,
                    messages: lang.userNotLogin,
                  });
                })
              } else {
                res.render(configVariable.homePage, {
                  title: env.appTitle,
                  logo: env.logo_app,
                  company_name: env.company_name,
                  messages: lang.userNotLogin,
                });
              }
            })
            .catch((err) => {
              res.status(500).json({
                message: err.message || lang.readeDataError,
              });
              res.render(configVariable.homePage, {
                title: env.appTitle,
                logo: env.logo_app,
                company_name: env.company_name,
                messages: "",
              });
            });

          })
          .catch((err) => {
            res.status(500).json({
              message: err.message || lang.readeDataError,
            });
            res.render(configVariable.homePage, {
              title: env.appTitle,
              logo: env.logo_app,
              company_name: env.company_name,
              messages: "",
            });
          });
      }else{
        //Bugs
        console.log(env.configLabelWheel)
        console.log('test')
      }

    } else {
      res.status(500).json({ message: lang.readeDataError });
      res.render(configVariable.homePage, {
        title: env.appTitle,
        logo: env.logo_app,
        company_name: env.company_name,
        messages: "",
      });
    }
  }


};
exports.readeController = async (req, res, next) => {
  const data = await luckyWheelModel
    .findAll()
    .then((data) => {
      console.log(data);
      res.json({ luckyData: data, messages: lang.usersSucess });
    })
    .catch((err) => {
      res.status(500).json({
        message: err.message || lang.readeDataError,
      });
    });
};

exports.createController = async (req, res, next) => {
  console.log('Save Winner')
  console.log(req.body)
  if (
    req.body.f_type !== "" &&
    req.body.f_running !== "" &&
    req.body.winnerLabel !== "" &&
    req.body.f_ipAddress !== "" &&
    req.body.f_customer !== "" &&
    req.body.f_mobile !== "" &&
    req.body.f_idCard !== ""
  ) {
    const newLucky = new luckyWheelModel({
      f_ipaddress: req.body.f_ipAddress,
      f_bookingcode: req.body.f_running,
      f_idcard: req.body.f_idCard,
      f_luckylabel: req.body.winnerLabel,
      f_countlucky: '1',
      f_status: "1",
    });
    newLucky
      .createData()
      .then((data) => {
      //  res.json({ luckyData: data, messages: lang.createDatabase });
        icopenhModel
        .findByCardID({ f_cardid:  req.body.f_idCard })
        .then((result) => {
        //  console.log(result)
            awardWinnerModel.findIDCard({ f_cardid:  req.body.f_idCard })
            .then((Results) =>{
              res.render(configVariable.winnerPage, {
                title: env.appTitle,
                logo: env.logo_app,
                company_name: env.company_name,
                messages: lang.userSuccess,
                dataPages: result,
                dataWheel: env.luckyWheelLabel,
                countLucky: env.countLucky,
                winner: Results,
              });
            })
        })
        .catch((err) => {
          res.status(500).json({
            message: err.message || lang.readeDataError,
          });
          res.render(configVariable.homePage, {
            title: env.appTitle,
            logo: env.logo_app,
            company_name: env.company_name,
            messages: "",
          });
        });
      })
      .catch((err) => {
        console.log(err)
        res.status(500).json({
          message: lang.createDataError,
        });
        res.render(configVariable.homePage, {
          title: env.appTitle,
          logo: env.logo_app,
          company_name: env.company_name,
          messages: "",
        });
        next();
      });
  } else {
    console.log(f_bookingcode);
    res.status(500).json({ luckyData: req.body, messages: lang.paramValue });
  }
};

exports.luckyWheelController = (req, res, next) => {};
