var express = require("express");
var router = express.Router();
const user_controller = require("../controllers/user_controller");

/* GET home page. */
router.get("/", (req, res, next) => {
  res.render("index", { user: req.user });
});

router.get("/signup", (req, res) => {
  res.render("signup");
});

router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/profile", (req, res) => {
  res.render("profile", { user: req.user });
});

router.post("/signup", user_controller.sign_up_post);

module.exports = router;
