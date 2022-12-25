const Province = require("../models/Province");

const provinceController = {
  async findAll(req, res) {
    const provinces = await Province.find();
    res.status(200).json(provinces);
  },
};
module.exports = provinceController;
