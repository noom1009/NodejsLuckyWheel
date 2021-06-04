var express = require("express");
var app = express();
var router = express.Router();
var md5 = require("md5");
const env = require("../config/env");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

function handleDisconnect() {
  var con = mysql.createConnection({
    host: env.host,
    user: env.username,
    password: env.password,
    database: env.database,
  });
  console.log(con);
  con.connect(function (err) {
    if (err) {
      console.log("error when connecting to db:", err);
      setTimeout(handleDisconnect, 10000);
    }
  });
  con.on("error", function (err) {
    if (err.code === "PROTOCOL_CONNECTION_LOST") {
      console.log("database reconnected");
      handleDisconnect();
    } else {
      console.log("db error", err);
      log.logger("error", "db error");
      con.release();
      throw err;
    }
  });
}

module.exports = handleDisconnect;
