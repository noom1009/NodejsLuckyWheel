function checkIDCard(f_idCard, labelLucky, IPAddressClient) {
    icopenhModel
      .findByCardID({ f_cardid: f_idCard })
      .then((result) => {
        if (
          typeof result !== "undefined" &&
          result.length > 0 &&
          result !== ""
        ) {
          res.render(configVariable.luckyPage, {
            title: env.appTitle,
            logo: env.logo_app,
            company_name: env.company_name,
            messages: lang.userSuccess,
            dataPages: result,
            dataWheel: labelLucky,
            countLucky: env.countLucky,
            ipAddress: IPAddressClient,
          });
        } else {
          res.render(configVariable.homePage, {
            title: env.appTitle,
            logo: env.logo_app,
            company_name: env.company_name,
            messages: lang.userNotLogin,
          });
        }
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

  module.exports = checkIDCard;