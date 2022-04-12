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
			minlength: 10,
			maxlength: 12,
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
				if (!validate.isEmail(value)) {
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
		role: {
			type: String,
			require: true,
		},
	},
	{
		timestamps: true,
	}
);
const Users = mongoose.model("users", usersSchema);

module.exports = Users;
