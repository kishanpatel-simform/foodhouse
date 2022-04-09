const { Timestamp } = require("bson");
const mongoose = require("mongoose");
const validate = require("validator");

const dishesSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100,
    },
    discription: {
      type: String,
      required: true,
      trim: true,
      maxlength: 250,
    },
    ingidients: {
      type: String,
      required: true,
      maxlength: 250,
    },
    isVeg: {
      type: Boolean,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    type: {
      type: Number,
      require: true,
      validate(value) {
        if (value !== "breakfast" || value !== "lunch" || value !== "dinner") {
          throw new Error("type can only be: breakfast, lunch or dinner");
        }
      },
    },
    mealProvider: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "mealProvidersSchema",
    },
  },

  {
    timestamps: true,
  }
);

const dishes = new mongoose.Schema("dishes", dishesSchema);
modules.exports = dishes;
