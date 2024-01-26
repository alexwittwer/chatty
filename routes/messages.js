var express = require("express");
var router = express.Router();
const message_controller = require("../controllers/message_controller");

router.get("/chat", message_controller.message_list_get);

router.get("/chat/:id", message_controller.message_single_get);

module.exports = router;
