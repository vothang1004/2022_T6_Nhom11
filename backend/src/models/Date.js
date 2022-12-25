const mongoose = require("mongoose");

const dateSchema = new mongoose.Schema(
  {
    key: {
      type: String,
    },
    day: {
      type: Number,
    },
    month: {
      type: Number,
    },
    year: {
      type: Number,
    },
  },
  { timestamps: true, collection: "date_dim" }
);
module.exports = mongoose.model("Date", dateSchema);
