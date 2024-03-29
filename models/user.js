const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { DateTime } = require("luxon");

const UserSchema = new Schema({
  username: { type: String, default: this.firstName, unique: true },
  isMember: { type: Boolean, default: false },
  isAdmin: { type: Boolean, default: false },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  date: { type: Date, default: Date.now },
  messages: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Message",
    },
  ],
});

UserSchema.virtual("url").get(function () {
  return `/users/${this._id}`;
});

UserSchema.virtual("dateFormatted").get(function () {
  return DateTime.fromJSDate(this.date).toLocaleString(DateTime.DATE_MED);
});

module.exports = mongoose.model("User", UserSchema);
