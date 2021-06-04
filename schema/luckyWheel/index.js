module.exports = (sequelize, Sequelize) => {
    const Luckywheel = sequelize.define(
      "tbl_luckywheel",
      {
        f_code: {
          type: Sequelize.INTEGER,
          field: "f_code",
          autoIncrement: true,
          allowNull: false,
          primaryKey: true,
        },
        f_ipaddress: {
          type: Sequelize.STRING,
          field: "f_ipaddress",
        },
        f_bookingcode: {
          type: Sequelize.STRING,
          field: "f_bookingcode",
        },
        f_idcard: {
          type: Sequelize.STRING,
          field: "f_idcard",
        },
        f_luckylabel: {
          type: Sequelize.STRING,
          field: "f_luckylabel",
        },
        f_countlucky: {
          type: Sequelize.STRING,
          field: "f_countlucky",
        },
        f_status: {
          type: Sequelize.INTEGER,
          field: "f_status",
        },
      },
      {
        timestamps: false,
        freezeTableName: true,
      }
    );
    return Luckywheel;
  };
  