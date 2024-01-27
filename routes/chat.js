var express = require("express");
var router = express.Router();
const message_controller = require("../controllers/message_controller");

/* GET home page. */
router.get("/", message_controller.message_list_get);

router.post("/", message_controller.message_create);

module.exports = router;
