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
const luckyWheelControllers = require("../../controllers/luckyWheelControllers");
const icoControllers = require('../../controllers/icopenhControllers');
const verifyToken = require('../../middleware/verifyToken');
const { findByRunning } = require("../../models/sales");

router.get('/',(req, res) => {
        res.render(configVariable.homePage, {
            title: env.appTitle,
            logo: env.logo_app,
            company_name: env.company_name,
            messages: '',
          });
});

router.post("/", luckyWheelControllers.luckyControllers, function (req, res, next) {});
router.post('/save', luckyWheelControllers.createController, function(req, res, next) {});


module.exports = router;
