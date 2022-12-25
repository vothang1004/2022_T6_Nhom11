const Award = require("../models/Award");

const awardController = {
  async findAll(req, res) {
    const awards = await Award.find();
    res.status(200).json(awards);
  },
};
module.exports = awardController;
