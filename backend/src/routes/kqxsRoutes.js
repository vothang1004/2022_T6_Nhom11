const router = require("express").Router();
const kqxsController = require("../controllers/kqxsController");

router.get("/", kqxsController.findAll);

module.exports = router;
