const mongoose = require("mongoose");

const KqxsSchema = new mongoose.Schema(
  {
    result: {
      type: String,
    },
  },
  { timestamps: true, collection: "kqxs" }
);

module.exports = mongoose.model("Kqxs", KqxsSchema);
