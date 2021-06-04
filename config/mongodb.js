const mongoose = require("mongoose");
const env = require("./env");
  mongoose
    .connect(env.mongooseURL, {
      useNewUrlParser: true,
      useFindAndModify: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    .then(() => console.log("Database Connected MongoDB Successfully"))
    .catch((err) => console.log("Connection error:", err));
