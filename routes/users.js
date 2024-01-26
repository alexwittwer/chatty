var express = require("express");
var router = express.Router();
const user_controller = require("../controllers/user_controller");

/* GET users listing. */
router.get("/users", function (req, res, next) {
  res.render("user_list", user_controller.user_list_get);
});

router.get("/users/:id", function (req, res, next) {
  res.render("user_page", user_controller.user_get);
});

router.get("/users/:id/messages", function (req, res, next) {
  res.render("user_messages", user_controller.user_messages_get);
});

module.exports = router;
