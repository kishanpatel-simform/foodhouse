const mongoose = require("mongoose");
const validate = require("validator");

const mealProviderSchema = new mongoose.Schema({
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
});
