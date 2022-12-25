const mongoose = require("mongoose");
const Award = require("./Award");
const Date = require("./Date");
const Province = require("./Province");

const KqxsSchema = new mongoose.Schema(
  {
    result: {
      type: String,
    },
    award: {
      type: mongoose.Schema.Types.ObjectId,
      ref: Award,
    },
    date: {
      type: mongoose.Schema.Types.ObjectId,
      ref: Date,
    },
    province: {
      type: mongoose.Schema.Types.ObjectId,
      ref: Province,
    },
  },
  { timestamps: true, collection: "kqxs" }
);

module.exports = mongoose.model("Kqxs", KqxsSchema);
