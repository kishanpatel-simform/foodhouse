const mongoose = require("mongoose");
const validate = require("validator");

const usersSchema = new mongoose.Schema(
  {
    fName: {
      type: String,
      require: true,
      trim: true,
    },
    lName: {
      type: String,
      require: true,
      trim: true,
    },
    contactNumber: {
      type: Number,
      min: 10,
      max: 12,
      require: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      lowercase: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error("invalid Email");
        }
      },
    },
    city: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      require: true,
    },
    avatar: {
      type: String,
      require: false,
    },
    Role: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);
const users = mongoose.model("users", usersSchema);

modules.exports = users;
