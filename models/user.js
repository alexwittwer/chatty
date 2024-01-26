const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: { type: String, default: this.firstName },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  isMember: { type: Boolean, default: false },
  password: { type: String, required: true },
  email: { type: String, required: true },
  date: { type: Date, required: true },
  messages: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Message",
  },
});

UserSchema.virtual("url").get(function () {
  return `/users/${this._id}`;
});

module.exports = mongoose.model("User", UserSchema);
