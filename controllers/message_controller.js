const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");
const Message = require("../models/message");

exports.message_single_get = asyncHandler(async (req, res, next) => {
  const message = Message.findById(req.params.id).exec();

  res.render("chat", { message: message });
});
exports.message_list_get = asyncHandler(async (req, res, next) => {
  const messages = await Message.find().exec();

  res.render("chat", { messages: messages, user: req.user });
});

exports.message_create = [
  body("text").trim().escape(),

  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);

    const message = new Message({
      user: req.user.username,
      text: req.body.message,
    });

    if (!errors.isEmpty()) {
      res.render("chat", {
        errors: errors.array(),
      });
    } else {
      await message.save();
      res.redirect("/chat");
    }
  }),
];

exports.message_delete = asyncHandler(async (req, res, next) => {
  try {
    await Message.findByIdAndDelete(req.params.id).exec();
  } catch (err) {
    res.status(500).json({ message: err });
  }

  res.redirect("/chat");
});
