var express = require("express");
var router = express.Router();
const user_controller = require("../controllers/user_controller");

/* GET home page. */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/signup", function (req, res, next) {
  res.render("signup", { title: "Express" });
});

router.post("/signup", user_controller.sign_up_post);

module.exports = router;
