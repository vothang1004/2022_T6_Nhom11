const mongoose = require("mongoose");

const connect = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/database_dw");
    console.log("Connect mongodb successfully");
  } catch (error) {
    console.log("Connect mongodb failure");
  }
};
module.exports = { connect };
