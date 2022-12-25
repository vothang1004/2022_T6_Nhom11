const Kqsx = require("../models/Kqxs");
const kqxsController = {
  async findAll(req, res) {
    const results = await Kqsx.find();
    res.status(200).json(results);
  },
};

module.exports = kqxsController;
