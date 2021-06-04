var mysql = require("mysql");
const env = require('./env');
var con = mysql.createConnection({
  host: env.host,
  user: env.username,
  password: env.password,
  database: env.database,
  port: env.port,
});
con.connect(function (err) {
    if (!err) {
        console.log("Database Connected Successfully!!!");
    } else {
        console.log("Failed to Establish Connection with Mysql with Error: " + err);
    }
});
module.exports = con;