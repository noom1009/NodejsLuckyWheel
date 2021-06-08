const con = require("../../config/mysql");
const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const path = require("path");
const app = express();
var md5 = require("md5");
const bcrypt = require("bcrypt");
const env = require("../../config/env");
const saltRounds = env.saltRounds;
const luckWheel = require("../../schema/luckyWheel/index");
const db = require("../index");
const logs = require("log4js");
const log = require("../../middleware/logger");
const Sequelize = require("sequelize");
const awardWinnerDB = db.awardWinnerDB;
const Op = db.Sequelize.Op;

class awardWinnerModel {
  constructor({
    f_customer = "",
    f_running = "",
    f_ipaddress = "",
    f_luckylabel = "",
    f_idcard = "",
    f_mobile = "",
    f_date = "",
  }) {
    this.f_ipaddress = f_ipaddress;
    this.f_customer = f_customer;
    this.f_idcard = f_idcard;
    this.f_luckylabel = f_luckylabel;
    this.f_mobile = f_mobile;
    this.f_running = f_running;
    this.f_date = f_date;
  }

  static findAll() {
    return awardWinnerDB
      .findAll()
      .then((result) => {
        console.log(result);
        return result;
      })
      .catch((err) => {
        // log.logger("warring", "505" +  err.message || lang.readeDataError);
        console.log(err);
      });
  }

  static findIDCard({ f_cardid = "" }) {
    console.log('test :' + f_cardid)
    return awardWinnerDB.findAll({
      where: { f_cardid: f_cardid },
    })
      .then((result) => {
       // console.log(result);
        return result;
      })
      .catch((err) => {
        log.logger("warring", "505" + err.message || lang.readeDataError);
        console.log(err);
      });
  }
  static findAndCount(){
    return awardWinnerDB.count()
    .then((result) => {
      //console.log(result)
      return result;
    })
    .catch((err) => {
      log.logger("warring", "505" +  err.message || lang.readeDataError);
      console.log(err);
      res.json({
        message: err.message || lang.readeDataError
      });
    });
  }

}

module.exports = awardWinnerModel;
