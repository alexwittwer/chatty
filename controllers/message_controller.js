const asyncHandler = require("express-async-handler");
const { body, validationResult } = require("express-validator");
const Message = require("../model/message");
const User = require("../models/user");
const { DateTime } = require("luxon");

exports.message_single_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED YET");
});
exports.message_list_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED YET");
});
exports.message_create_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED YET");
});
exports.message_create_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED YET");
});
exports.message_delete_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED YET");
});
exports.message_delete_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED YET");
});
exports.message_update_get = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED YET");
});
exports.message_update_post = asyncHandler(async (req, res, next) => {
  res.send("NOT IMPLEMENTED YET");
});
