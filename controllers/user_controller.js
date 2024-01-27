const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");
const Message = require("../models/message");
const User = require("../models/user");
const bcryptjs = require("bcryptjs");
const { DateTime } = require("luxon");
require("dotenv").config();

exports.user_get = asyncHandler(async (req, res, next) => {
  const user = User.findById(req.params.id).exec();

  res.render("user_page", { user: user });
});

exports.user_list_get = asyncHandler(async (req, res, next) => {
  const users = User.find().exec();

  res.render("user_list", { users: users });
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

    try {
      hashedPassword = await bcryptjs.hash(req.body.password, 10);

      const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        username: req.body.username,
        isMember: true,
        email: req.body.email,
        password: hashedPassword,
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
    } catch (err) {
      res.status(500).render("error", { error: err });
    }
  }),
];

exports.user_admin_add = asyncHandler(async (req, res, next) => {
  if (req.body.password === process.env.ADMIN_PW) {
    await User.findByIdAndUpdate(req.params.id, {
      isAdmin: true,
      isMember: true,
    });
  }

  if (req.body.password === process.env.MEMBER_PW) {
    await User.findByIdAndUpdate(req.params.id, {
      isMember: true,
    });
  }

  res.redirect(`/chat`);
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
