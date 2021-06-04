var express = require("express");
var router = express.Router();
const axios = require("axios");
const cors = require('cors')
var app = express();
var log4js = require("log4js");
var logger = log4js.getLogger();
var session = require("express-session");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
var md5 = require("md5");
const nodemailer = require("nodemailer");
const db = require("../models/index");
const sequelize = db.sequelize;
const Users = db.UsersDB;
const UsersModel = require('../models/sales/index');
const env = require("../config/env");
const configvariable = require("../config/configvariable");
const log = require('../middleware/logger');
const saltRounds = env.saltRounds;
const lang = require('../lang/lang_app');
const con = require("../config/mysql");
const icoModel = require('../models/icopenh/index');

exports.readeController = async(req, res, next) =>{
  console.log('Search Database')
    const data = await icoModel.findAll()
    .then(data => {
      console.log(data)
      res.json({ booking: data  , messages: lang.usersSucess });
    })
    .catch(err => {
      log.logger("warring", "505" +  err.message || lang.readeDataError);
      res.status(500).json({
        message:
          err.message || lang.readeDataError
      });
    });
};

exports.findController = async(req,res, next) =>{
    const { f_project } = req.params 
    console.log(f_project)
    const data = await icoModel.findByProject({ f_project : f_project})
    .then(data => {
        res.json(data);
      })
      .catch(err => {
        log.logger("warring", "505" +  err.message || lang.readeDataError);
        res.status(500).json({
          message:
            err.message || lang.readeDataError
        });
      });
};

exports.findCardIDController = async (req, res, next) => {
  if(Object.keys(req.params).length === 0){
    console.log(lang.paramValue)
    res.json({messages:lang.emptyData});
  }else{
    const { f_cardid } = req.params
   // console.log(f_cardid)
    const data = await icoModel.findByCardID ({ f_cardid : f_cardid})
    .then(data => {
      if(data.length > 0 ){
       console.log(data)
        res.json({ usersData : data[0] , messages: lang.usersSucess});
      }else{
   //     console.log(data)
        res.json({ usersData : data[0] , messages:lang.usernotlogin});
      }
    })
    .catch(err => {
      log.logger("warring", "505" +  err.message || lang.readeDataError);
      res.status(500).json({
        message: err.message || lang.readeDataError
      });
    });
  }
};


exports.icopenhController = (req, res, next) => {};
