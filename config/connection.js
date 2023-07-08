const mongoose = require("mongoose");

const db = () => {
  return mongoose.connect(
    process.env.MONGODB || "mongodb://localhost:27017/mongooseCircLinkDB"
  );
};

module.exports = db;
