const express = require("express");
const app = express();
const router = express.Router();
const path = require("path");
const session = require("express-session");
const env = require('../../config/env');
const configvariable = require("../../config/configvariable");


router.get("/", function (req, res) {
 req.session.destroy();
 // res.status(200).send({ auth: false, token: null });
 //req.flash('error', "Please enter name and author");
 res.redirect(configvariable.rootPage);
 console.log("Logout successfully!");
});

router.post("/logout", function (req, res) {
 req.session.destroy();
 // res.status(200).send({ auth: false, token: null });
 //req.flash('error', "Please enter name and author");
 res.redirect(configvariable.rootPage);
 console.log("Logout successfully!");
});

module.exports = router;