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

router.get("/", function (req, res, next) {
  res.render(configVariable.dashboardPage, {
    title: env.appTitle,
    logo: env.logo_app,
    company_name: env.company_name,
    messages: lang.userNotLucky,
  });
});

module.exports = router;
