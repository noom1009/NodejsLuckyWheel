const express = require("express");
const app = express();
const cors = require("cors");
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
const dashboardController = require('../../controllers/dashboardController');


router.get("/", dashboardController.getLuckyWheelController , function (req, res, next) {});

module.exports = router;
