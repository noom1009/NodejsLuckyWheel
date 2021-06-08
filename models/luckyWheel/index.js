const con = require('../../config/mysql');
const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const path = require("path");
const app = express();
var md5 = require("md5");
const bcrypt = require("bcrypt");
const env = require('../../config/env');
const saltRounds = env.saltRounds;
const luckWheel = require('../../schema/luckyWheel/index');
const db = require('../index');
const logs = require('log4js');
const log = require('../../middleware/logger');
const Sequelize = require('sequelize');
const luckyWheelDB = db.LuckWheelDB
const Op = db.Sequelize.Op;

class luckyWheelModel {
    constructor({
        f_ipaddress = "",
        f_running = "",
        f_bookingcode = "",
        f_idcard = "",
        f_luckylabel = "",
        f_countlucky = "",
        f_date = "",
        f_status = "",
      }) {
        this.f_ipaddress = f_ipaddress;
        this.f_date = f_date;
        this.f_bookingcode = f_bookingcode;
        this.f_idcard = f_idcard;
        this.f_luckylabel = f_luckylabel;
        this.f_countlucky = f_countlucky;
        this.f_status = f_status;
        this.f_running = f_running;
      }
      createData() {
        const newLucky = {
          f_ipaddress: this.f_ipaddress,
          f_bookingcode: this.f_bookingcode,
          f_idcard: this.f_idcard,
          f_luckylabel: this.f_luckylabel,
          f_countlucky: this.f_countlucky,
          f_status: this.f_status,
        };
        return luckyWheelDB.create(newLucky)
          .then((result) => {
            return result;
          })
          .catch((err) => {
            console.log(err);
          });
      }
  static findAll() {
    return luckyWheelDB.findAll()
      .then((result) => {
        return result;
      })
      .catch((err) => {
        log.logger("warring", "505" +  err.message || lang.readeDataError);
        console.log(err);
      });
  }

  static findLabel({f_status=""}){
    return luckyWheelDB.findAll({
        where: { f_status: 1 },
      })
        .then((result) => {
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

  static findIDCard({f_cardid=""}){
    console.log(f_cardid)
    return luckyWheelDB.findAll({
        where: { f_idcard: f_cardid },
      })
        .then((result) => {
        //  console.log(result)
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

module.exports = luckyWheelModel;