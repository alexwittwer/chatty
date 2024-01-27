const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { DateTime } = require("luxon");

const MessageSchema = new Schema({
  text: { type: String, required: true },
  user: { type: String, required: true },
  msgDate: { type: Date, default: Date.now },
});

MessageSchema.virtual("dateFormatted").get(function () {
  return DateTime.fromJSDate(this.msgDate).toLocaleString(DateTime.DATE_MED);
});

MessageSchema.virtual("dateISO").get(function () {
  return DateTime.fromJSDate(this.msgDate).toISODate();
});

module.exports = mongoose.model("Message", MessageSchema);
