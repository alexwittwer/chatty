const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");
const Message = require("../models/message");
const User = require("../models/user");
const { DateTime } = require("luxon");

exports.user_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED YET");
});
exports.user_list_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED YET");
});
exports.user_create_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED YET");
});
exports.user_create_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED YET");
});
exports.user_delete_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED YET");
});
exports.user_delete_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED YET");
});
exports.user_update_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED YET");
});
exports.user_update_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED YET");
});

exports.user_messages_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED YET");
});

exports.sign_up_get = asyncHandler(async (req, res, next) => {
  res.render("signup");
});

exports.sign_up_post = [
  body("firstName").escape(),
  body("lastName").escape(),
  body("email").escape(),
  body("password").escape(),

  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);

    const user = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      username: req.body.username,
      isMember: true,
      email: req.body.email,
      password: req.body.password,
      date: Date.now(),
    });

    if (!errors.isEmpty()) {
      res.render("signup", {
        loginDetails: user,
        errors: errors.array(),
      });
    } else {
      await user.save();
      res.redirect("/");
    }
  }),
];
