const MealProviders = require("../../models/mealProviders");
const Users = require("../../models/users");

const createMealProvider = async (user_id, mealProvider) => {
	const user = await Users.findOne({ _id: user_id });

	if (user) {
		const newMealProvider = new MealProviders({
			...mealProvider,
			user: user._id,
		});
		await newMealProvider.save();
		return newMealProvider;
	} else {
		throw new Error("user not found");
	}
};

const getAllMealProviders = async () => {
	const mealProviders = await MealProviders.find();
	return mealProviders;
};

module.exports = {
	createMealProvider,
	getAllMealProviders,
};
