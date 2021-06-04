const env = require("../config/env");
  function checkIPAddress(req, res, next) {
    axios({
      method: "get",
      url: "https://api.ipify.org?format=json",
    })
      .then((response) => {
        console.log(response.data.ip)
        return response.data.ip;
      })
      .catch((err) => {
        res.status(500).json({
          message: err.message || lang.readeDataError,
        });
        res.render(configVariable.homePage, {
          title: env.appTitle,
          logo: env.logo_app,
          company_name: env.company_name,
          messages: "",
        });
      });
  }
  module.exports = checkIPAddress;