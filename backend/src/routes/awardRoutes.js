const awardController = require("../controllers/awardController");

const router = require("express").Router();

router.get("/", awardController.findAll);
module.exports = router;
