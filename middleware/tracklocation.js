const request = require("request");
const yargs = require("yargs");
const express = require("express");
const session = require("express-session");
const path = require("path");
const mongoose = require("mongoose");
const env = require("../config/env");
const Logsdata = require('../schema/logsData/index');

var URL = "https://www.ipapi.co/";
var URL2 = "https://api.myip.com";
const argv = yargs
  .option({
    ip: {
      describe: " IP Address to which ou want to find Loaction",
      alias: "i",
      strubg: true,
    },
  })
  .help()
  .alias("help", "h").argv;
if (argv.ip) {
  URL += argv.ip + "/json";
} else {
  URL += "json";
}
console.log(URL);
request(
  {
    url: URL,
    json: true,
  },
  (err, response, body) => {
    if (!err && response.statusCode == 200) {
      console.log(body);
      if (!body.ip) {
        res.status(400).send({
          message: "Content can not be empty!",
        });
        return;
      }
      const payload = body
      const logsdata = new Logsdata(payload)
       logsdata.save()
/*
  const logsdata = new Logsdata({
    ip: body.ip,
    version: body.version,
    city: body.city,
    region: body.region,
    region_code: body.region_code,
    country: body.country,
    country_name: body.country_name,
    country_code: body.country_code,
    country_code_iso3: body.country_code_iso3,
    country_capital: body.country_capital,
    country_tld: body.country_tld,
    continent_code: body.continent_code,
    in_eu: body.in_eu,
    postal: body.postal,
    latitude: body.latitude,
    longitude: body.longitude,
    timezone: body.timezone,
    utc_offset: body.utc_offset,
    country_calling_code: body.country_calling_code,
    currency: body.currency,
    currency_name: body.currency_name,
    languages: body.languages,
    country_area: body.country_area,
    country_population: body.country_population,
    asn: body.asn,
    org: body.org,
  });
  */
    }
  }
);
