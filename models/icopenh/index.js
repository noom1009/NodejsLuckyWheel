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
const IcopenhDB = db.IcopenhDB;
const Op = db.Sequelize.Op;


class IcopengModel {
  constructor({
    f_code = "",
    f_running = "",
    f_customer = "",
    f_mobile = "",
    f_cardid = "",
    f_birthdate = "",
    f_address = "",
    f_mail_address = "",
    f_email = "",
    f_line = "",
    f_nation = "",
    f_gent = "",
    f_bud = "",
    f_promotion = "",
    f_groupcode = "",
    f_totalprice ="",
    f_bankname ="",
    f_name ="",
    f_number ="",
    f_branch ="",
    f_bookingdate ="",
    f_pricesum ="",
    f_status ="",
    f_userlogin ="",
    f_project ="",
    f_unit ="",
    f_type ="",
    f_sq_m ="",
    f_sq_wa ="",
    f_downpayment ="",
    f_booking ="",
    f_contact ="",
    f_down ="",
    f_final_payment ="",
    f_datesave ="",
    f_cashdiscount ="",
    f_type_contact ="",
    f_contactnumber ="",
    f_ref ="",
    f_grade ="",
    f_datetranfer="",
    f_datecancle="",
    f_contacetranfer="",
    f_datefollow="",
    f_datecancletimestamp="",
    f_contacetranfertimestamp ="",
  }) {
    this.f_name = f_name;
    this.f_code = f_code;
    this.f_running = f_running;
    this.f_customer = f_customer;
    this.f_mobile = f_mobile;
    this.f_cardid = f_cardid;
    this.f_birthdate = f_birthdate;
    this.f_address = f_address;
    this.f_mail_address = f_mail_address;
    this.f_email = f_email;
    this.f_line = f_line;
    this.f_nation = f_nation;
    this.f_gent = f_gent;
    this.f_bud = f_bud;
    this.f_promotion = f_promotion;
    this.f_groupcode = f_groupcode;
    this.f_totalprice = f_totalprice;
    this.f_bankname = f_bankname;
    this.f_number = f_number;
    this.f_branch = f_branch;
    this.f_bookingdate = f_bookingdate;
    this.f_pricesum = f_pricesum;
    this.f_status = f_status;
    this.f_userlogin = f_userlogin;
    this.f_project = f_project;
    this.f_unit = f_unit;
    this.f_type = f_type;
    this.f_sq_m = f_sq_m;
    this.f_sq_wa = f_sq_wa;
    this.f_downpayment = f_downpayment;
    this.f_booking = f_booking;
    this.f_contact = f_contact;
    this.f_down = f_down;
    this.f_final_payment = f_final_payment;
    this.f_datesave = f_datesave;
    this.f_cashdiscount = f_cashdiscount;
    this.f_type_contact = f_type_contact;
    this.f_contactnumber = f_contactnumber;
    this.f_ref = f_ref;
    this.f_grade = f_grade;
    this.f_datetranfer = f_datetranfer;
    this.f_datecancle = f_datecancle;
    this.f_contacetranfer = f_contacetranfer;
    this.f_datefollow = f_datefollow;
    this.f_datecancletimestamp = f_datecancletimestamp;
    this.f_contacetranfertimestamp = f_contacetranfertimestamp;
  }

  static findAll() {
    return IcopenhDB.findAll()
      .then((result) => {
        return result;
      })
      .catch((err) => {
        log.logger("warring", "505" +  err.message || lang.readeDataError);
        console.log(err);
      });
  }

  static findByCardID({f_cardid=""}){
    return IcopenhDB.findAll({
        where: { f_cardid: f_cardid },
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

  static findAndCount()

}

module.exports = IcopengModel;