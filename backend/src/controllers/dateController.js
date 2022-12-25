const Date = require("../models/Date");

const dateController = {
  async findAll(req, res) {
    const dates = await Date.find();
    res.status(200).json(dates);
  },
};
module.exports = dateController;
