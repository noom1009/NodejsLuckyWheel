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
const salesModel = require("../models/sales/index");

exports.readeController = async(req, res, next) =>{
    const data = await salesModel.findAll()
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

exports.findController = async(req,res, next) =>{
    const { f_project } = req.params 
    console.log(f_project)
    const data = await salesModel.findByProject({ f_project : f_project})
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

exports.findRunningController = async (req, res, next) =>{
    const { f_running } = req.params 
    console.log(f_running)
    const data = await salesModel.findByRunning({ f_running : f_running})
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

exports.findCodeController = async (req, res, next) => {
  const { f_code } = req.params
  console.log(f_code)
  const data = await salesModel.findCode({ f_code :f_code})
  .then(data => {
    res.json(data);
  })
  .catch(err => {
    log.logger('warring' , '505')
    res.status(500).json({
      message: err.message || lang.readeDataError
    });
  });
};

exports.findCardIDController = async (req, res, next) => {
  const { f_cardid } = req.params
  console.log(f_cardid)
  const data = await salesModel.findByCardID ({ f_cardid : f_cardid})
  .then(data => {
    res.json(data);
  })
  .catch(err => {
    log.logger("warring", "505" +  err.message || lang.readeDataError);
    res.status(500).json({
      message: err.message || lang.readeDataError
    });
  });
};

exports.findTypeController = async (req, res, next) => {
  const { f_type } = req.params
  console.log(f_type)
  const data = await salesModel.findByType ({ f_type: f_type})
  .then(data => {
    res.json(data)
  })
  .catch(err => {
    log.logger("warring", "505" +  err.message || lang.readeDataError);
    res.status(500).json({
      message: err.message || lang.readeDataError
    });
  });
};

exports.salesController = (req, res, next) => {};
