const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const path = require("path");
const app = express();
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const mysql = require('mysql');
const schedule = require('node-schedule');
const favicon = require('serve-favicon');
const router = require('./routers/index');
const env = require("./config/env");
const createError = require('http-errors');
const log4js = require("log4js");
const log = log4js.getLogger();
const cors = require('cors');
const configVariable = require('./config/configVariable');

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(cors());
app.use(favicon(path.join(__dirname,"favicon.ico")))
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
app.use('/public', express.static('public'))
app.use(express.static(path.join(__dirname, '/public')))
app.use('/module', express.static('node_modules'))
app.use(express.static(path.join(__dirname, '/node_modules')))

app.use(
  session({
    secret: env.secret,
    resave: false,
    saveUninitialized: true,
     resave: 'true',
    cookie: {
      maxAge: 120 * 1000 * 60,
    },
  })
);

app.use(router);


app.use(function(req, res, next) {
  res.status(404);
  res.render(configVariable.errorPage, {
    title: env.appTitle,
    logo: env.logo_app,
    company_name: env.company_name, 
    codeError: '404',
  });
});

app.use(function(req, res, next) {
  res.status(505);
  res.render(configVariable.errorPage, {
    title: env.appTitle,
    logo: env.logo_app,
    company_name: env.company_name, 
    codeError: '505',
  });
});



const port = process.env.PORT || env.srvPort;
app.listen(port, () => console.log(`Server is running on port ${port}!`));

module.exports = app