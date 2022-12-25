const mongoose = require("mongoose");

const provinceSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
  },
  { timestamps: true, collection: "province_dim" }
);
module.exports = mongoose.model("Province", provinceSchema);
