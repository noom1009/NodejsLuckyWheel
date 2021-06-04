var log4js = require("log4js");
log4js.configure({
  appenders: {
    everything: {
      type: "dateFile",
      filename: "logs/logs",
      pattern: "-yyyy-MM.log",
      compress: false,
      layout: {
        type: "pattern",
        pattern: "%d %p - %m",
      },
    },
  },
  categories: {
    default: {
      appenders: ["everything"],
      level: "debug",
    },
    info: {
      appenders: ["everything"],
      level: "info",
    },
    warn: {
      appenders: ["everything"],
      level: "warn",
    },
    error: {
      appenders: ["everything"],
      level: "error",
    },
  },
});
exports.logger = function logger(level, ltxt) {
  var log = log4js.getLogger();
  log.level = level;
  log[level](ltxt);
};
