const router = require("express").Router();
const provinceController = require("../controllers/provinceController");

router.get("/", provinceController.findAll);
module.exports = router;
