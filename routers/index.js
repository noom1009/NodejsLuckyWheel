const express = require("express");
const app = express();
const router = express.Router();
const path = require("path");
const log = require("../middleware/logger");
const configVariable = require("../config/configVariable");
const env = require("../config/env");

const icopenhRouter = require('./icopenh/index');
const salesRouter = require('./sales/index');
const luckyRouter = require('./luckyWheel/index');

router.get("/", (req, res) => {
    res.render(configVariable.homePage, {
        title: env.appTitle,
        logo: env.logo_app,
        company_name: env.company_name,
        messages: '',
      });
  });

router.use('/sales', salesRouter)
router.use('/icopenh',icopenhRouter)
router.use('/luckywheel',luckyRouter)

module.exports = router;
