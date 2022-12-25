const dateController = require("../controllers/dateController");

const router = require("express").Router();

router.get("/", dateController.findAll);
module.exports = router;
