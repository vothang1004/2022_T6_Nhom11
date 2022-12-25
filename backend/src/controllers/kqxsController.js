const Kqsx = require("../models/Kqxs");
const kqxsController = {
  async findAll(req, res) {
    // const day = req.query.day;
    // const month = req.query.month;
    // const year = req.query.year;
    // console.log("day => ", day);
    // console.log("month => ", month);
    // console.log("year => ", year);
    let results = await Kqsx.find()
      .populate("award")
      .populate("date")
      .populate("province");
    res.status(200).json(results);
  },
};


module.exports = kqxsController;
