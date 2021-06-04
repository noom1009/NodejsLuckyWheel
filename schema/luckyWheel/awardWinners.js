module.exports = (sequelize, Sequelize) => {
    const awardWinnerSchema = sequelize.define(
      "tv_luckywheel",
      {
        f_running: {
          type: Sequelize.STRING,
          field: "f_running",
          primaryKey: true,
        },
        f_customer: {
          type: Sequelize.STRING,
          field: "f_customer",
        },
        f_ipaddress: {
          type: Sequelize.STRING,
          field: "f_ipaddress",
        },
        f_luckylabel: {
          type: Sequelize.STRING,
          field: "f_luckylabel",
        },
        f_cardid: {
          type: Sequelize.STRING,
          field: "f_cardid",
        },
        f_mobile: {
          type: Sequelize.STRING,
          field: "f_mobile",
        },
        f_type: {
          type: Sequelize.STRING,
          field: "f_type",
        },
        f_unit: {
          type: Sequelize.STRING,
          field: "f_unit",
        },
      },
      {
        timestamps: false,
        freezeTableName: true,
      }
    );
    return awardWinnerSchema;
  };
  