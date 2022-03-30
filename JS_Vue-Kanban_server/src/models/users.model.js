const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const userSchema = mongoose.Schema({
  username: { type: String, required: true, unique: "true" },
  password: {
    type: String,
    required: true,
  },
});

userSchema.index({ username: 1 }, { unique: true });

userSchema.plugin(uniqueValidator);

const UsersModel = mongoose.model("users", userSchema);

module.exports = UsersModel;
