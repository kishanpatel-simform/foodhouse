const MealProviders = require("../../models/mealProviders");
const { createMealProvider } = require("../../services/mealProviders/mealProviders");

const newMealProvider = async (req, res) => {
	try {
		const user_id = req.params.id;
		const mealProvider = await createMealProvider(user_id, req.body);
		res.status(201).send(mealProvider);
	} catch (e) {
		res.status(500).json({ msg: e.message });
	}
};

module.exports = { newMealProvider };
