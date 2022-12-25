const mongoose = require("mongoose");

const awardSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
  },
  { timestamps: true, collection: "award_dim" }
);
module.exports = mongoose.model("Award", awardSchema);
