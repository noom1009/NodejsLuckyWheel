const util = require("util");
const Sequelize = require("sequelize");
const env = require("../config/env");

const sequelize = new Sequelize(env.database, env.username, env.password, {
  host: env.host,
  port: env.port,
  dialect: env.dialect,
  logging: false,
  freezeTableName: true,
  operatorsAliases: false,
  pool: {
    max: env.max,
    min: env.pool.min,
    acquire: env.pool.acquire,
    idle: env.pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.SalesDB = require("../schema/sales/index")(sequelize, Sequelize);
db.IcopenhDB = require('../schema/icopenh/index')(sequelize, Sequelize);
db.LuckWheelDB = require('../schema/luckyWheel/index')(sequelize, Sequelize);
db.ConfigWheelDB = require('../schema/configWheel/index')(sequelize, Sequelize);
db.awardWinnerDB = require('../schema/luckyWheel/awardWinners')(sequelize, Sequelize);
module.exports = db;
