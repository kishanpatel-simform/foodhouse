const Users = require("../../models/users");

const createUser = async (user) => {
	console.log(user);
	await user.save();
	return user;
};

const getAllUsers = async () => {
	const users = await Users.find();
	return users;
};

module.exports = { createUser, getAllUsers };
