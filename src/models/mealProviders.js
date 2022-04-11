const mongoose = require("mongoose");
const validate = require("validator");

const mealProvidersSchema = new mongoose.Schema({
	orgName: {
		type: String,
		require: true,
		trim: true,
	},
	isActive: {
		type: Boolean,
		require: true,
		default: true,
	},
	isVerified: {
		type: Boolean,
		require: true,
		default: true,
	},
	user: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: "userSchema",
	},
});

const mealProviders = mongoose.model("mealProviders", mealProvidersSchema);

module.exports = mealProviders;
