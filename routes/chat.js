var express = require("express");
var router = express.Router();
const message_controller = require("../controllers/message_controller");

/* GET home page. */
router.get("/", message_controller.message_list_get);

router.post("/", message_controller.message_create);

router.post("/:id", message_controller.message_delete);

module.exports = router;
