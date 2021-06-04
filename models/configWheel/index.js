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
const ico = require('../../schema/icopenh/index');
const db = require('../../models/index');
const logs = require('log4js');
const log = require('../../middleware/logger');
const Sequelize = require('sequelize')
const ConfigWheelDB = db.ConfigWheelDB;
const Op = db.Sequelize.Op;


class ConfigWheelModel {
  constructor({
    f_code = "",
    f_label = "",
    f_typeLabel = "",
    f_color = "",
    f_img = "",
    f_status = "",
    f_popup = "",
    f_total = "",
    f_count = "",
  }) {
    this.f_label = f_label;
    this.f_code = f_code;
    this.f_typeLabel = f_typeLabel;
    this.f_color = f_color;
    this.f_img = f_img;
    this.f_status = f_status;
    this.f_popup = f_popup;
    this.f_total = f_total;
    this.f_count = f_count;
  }

  static findAll() {
    return ConfigWheelDB.findAll()
      .then((result) => {
        return result;
      })
      .catch((err) => {
        log.logger("warring", "505" +  err.message || lang.readeDataError);
        console.log(err);
      });
  }
 static findStatus(){
  return ConfigWheelDB.findAll({
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

}

module.exports = ConfigWheelModel;