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
const loginControllers = require('../../controllers/loginControllers');

router.get("/", (req, res) => {
  res.render(configVariable.loginPage, {
    title: env.appTitle,
    logo: env.logo_app,
    company_name: env.company_name,
    messages: lang.messagesBoxForEmp,
  });
});

router.post("/", (req, res) => {
  res.render(configVariable.loginPage, {
    title: env.appTitle,
    logo: env.logo_app,
    company_name: env.company_name,
    messages: lang.messagesBoxForEmp,
  });
});

router.post("/signup", loginControllers.registerController, function (req, res, next) {});
router.post("/signin", loginControllers.authController, function (req, res, next) {});

module.exports = router;
