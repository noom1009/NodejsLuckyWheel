module.exports = (sequelize, Sequelize) => {
    const configWheelSchema = sequelize.define(
      "tbl_configWheel",
      {
        f_code: {
          type: Sequelize.INTEGER,
          field: "f_code",
          autoIncrement: true,
          allowNull: false,
          primaryKey: true,
        },
        f_label: {
          type: Sequelize.STRING,
          field: "f_label",
        },
        f_typeLabel: {
          type: Sequelize.STRING,
          field: "f_typeLabel",
        },
        f_color: {
          type: Sequelize.STRING,
          field: "f_color",
        },
        f_img: {
          type: Sequelize.STRING,
          field: "f_img",
        },
        f_status: {
          type: Sequelize.INTEGER,
          field: "f_status",
        },
        f_popup:{
            type: Sequelize.STRING,
            field: "f_popup",
        },
        f_text:{
          type: Sequelize.STRING,
          field: "f_text",
        },
        f_total:{
          type: Sequelize.STRING,
          field: "f_total",
        },
        f_count:{
          type: Sequelize.STRING,
          field: "f_count",
        },
      },
      {
        timestamps: false,
        freezeTableName: true,
      }
    );
    return configWheelSchema;
  };
  