const Users = require("../../models/users");
const { createUser, getAllUsers } = require("../../services/users/users");

const userSignup = async (req, res) => {
	try {
		const user = await createUser(new Users(req.body));
		res.status(201).send(user);
	} catch (e) {
		res.status(500).json({ msg: e.message });
	}
};

const getUsers = async (req, res) => {
	try {
		const users = await getAllUsers();
		res.status(201).send(users);
	} catch (e) {
		res.status(500).json({ msg: e.message });
	}
};
module.exports = {
	userSignup,
	getUsers,
};
