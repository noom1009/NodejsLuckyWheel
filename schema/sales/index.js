module.exports = (sequelize, Sequelize) => {
    const Tranfer = sequelize.define(
      "tv_tranfer",
      {
        f_code: {
          type: Sequelize.INTEGER,
          field: "f_code",
          autoIncrement: true,
          allowNull: false,
          primaryKey: true,
        },
        f_running: {
          type: Sequelize.STRING,
          field: "f_running",
        },
        f_customer: {
          type: Sequelize.STRING,
          field: "f_customer",
        },
        f_mobile: {
          type: Sequelize.STRING,
          field: "f_mobile",
        },
        f_cardid: {
          type: Sequelize.STRING,
          field: "f_cardid",
        },
        f_birthdate: {
          type: Sequelize.STRING,
          field: "f_birthdate",
        },
        f_address: {
          type: Sequelize.INTEGER,
          field: "f_address",
        },
        f_mail_address: {
          type: Sequelize.INTEGER,
          field: "f_email",
        },
        f_email: {
          type: Sequelize.INTEGER,
          field: "f_email",
        },
        f_line: {
          type: Sequelize.INTEGER,
          field: "f_line",
        },
        f_nation: {
          type: Sequelize.INTEGER,
          field: "f_nation",
        },
        f_gent: {
          type: Sequelize.INTEGER,
          field: "f_gent",
        },
        f_bud: {
          type: Sequelize.INTEGER,
          field: "f_bud",
        },
        f_promotion: {
          type: Sequelize.INTEGER,
          field: "f_promotion",
        },
        f_groupcode: {
          type: Sequelize.INTEGER,
          field: "f_groupcode",
        },
        f_totalprice: {
          type: Sequelize.INTEGER,
          field: "f_totalprice",
        },
        f_bankname: {
          type: Sequelize.INTEGER,
          field: "f_bankname",
        },
        f_name: {
          type: Sequelize.INTEGER,
          field: "f_name",
        },
        f_number: {
          type: Sequelize.INTEGER,
          field: "f_number",
        },
        f_branch: {
          type: Sequelize.INTEGER,
          field: "f_branch",
        },
        f_bookingdate: {
          type: Sequelize.INTEGER,
          field: "f_bookingdate",
        },
        f_pricesum: {
          type: Sequelize.INTEGER,
          field: "f_pricesum",
        },
        f_status: {
          type: Sequelize.INTEGER,
          field: "f_status",
        },
        f_userlogin: {
          type: Sequelize.INTEGER,
          field: "f_userlogin",
        },
        f_project: {
          type: Sequelize.INTEGER,
          field: "f_project",
        },
        f_unit: {
          type: Sequelize.INTEGER,
          field: "f_unit",
        },
        f_type: {
          type: Sequelize.INTEGER,
          field: "f_type",
        },
        f_sq_m: {
          type: Sequelize.INTEGER,
          field: "f_sq_m",
        },
        f_sq_wa: {
          type: Sequelize.INTEGER,
          field: "f_sq_wa",
        },
        f_downpayment: {
          type: Sequelize.INTEGER,
          field: "f_downpayment",
        },
        f_booking: {
          type: Sequelize.INTEGER,
          field: "f_booking",
        },
        f_contact: {
          type: Sequelize.INTEGER,
          field: "f_contact",
        },
        f_down: {
          type: Sequelize.INTEGER,
          field: "f_down",
        },
        f_final_payment: {
          type: Sequelize.INTEGER,
          field: "f_final_payment",
        },
        f_datesave: {
          type: Sequelize.INTEGER,
          field: "f_datesave",
        },
        f_cashdiscount: {
          type: Sequelize.INTEGER,
          field: "f_cashdiscount",
        },
        f_type_contact: {
          type: Sequelize.INTEGER,
          field: "f_type_contact",
        },
        f_contactnumber: {
          type: Sequelize.INTEGER,
          field: "f_contactnumber",
        },
        f_ref: {
          type: Sequelize.INTEGER,
          field: "f_ref",
        },
        f_grade: {
          type: Sequelize.INTEGER,
          field: "f_grade",
        },
        f_datetranfer: {
          type: Sequelize.INTEGER,
          field: "f_datetranfer",
        },
        f_datecancle: {
          type: Sequelize.INTEGER,
          field: "f_datecancle",
        },
        f_contacetranfer: {
          type: Sequelize.INTEGER,
          field: "f_contacetranfer",
        },
        f_datefollow: {
          type: Sequelize.INTEGER,
          field: "f_datefollow",
        },
        f_datecancletimestamp: {
          type: Sequelize.INTEGER,
          field: "f_datecancletimestamp",
        },
        f_contacetranfertimestamp: {
          type: Sequelize.INTEGER,
          field: "f_contacetranfertimestamp",
        },
      },
      {
        timestamps: false,
        freezeTableName: true,
      }
    );
    return Tranfer;
  };
  