const express = require("express");
const app = express();
const cors = require('cors')
const router = express.Router();
const path = require("path");
const session = require("express-session");
const md5 = require("md5");
const jwt = require("jsonwebtoken");
const axios = require("axios");
const crypto = require("crypto");
const env = require("../../config/env");
const configVariable = require("../../config/configVariable");
const lang = require("../../lang/lang_app");
const Icopenh = require("../../controllers/icopenhControllers");
const verifyToken = require('../../middleware/verifyToken');
const { findByRunning } = require("../../models/sales");

router.get("/", function (req, res, next) {
    res.status(500).json({
        message:
          err.message || lang.emptyData
      });
});

router.get('/search', Icopenh.readeController ,function(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true); 
});

router.get('/searchcardid/:f_cardid', Icopenh.findCardIDController ,function(req, res){
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true); 
});


module.exports = router;
