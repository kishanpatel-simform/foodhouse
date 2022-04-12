const express = require("express");
const { newMealProvider } = require("../../controllers/mealProviders/mealProviders");
const router = new express.Router();

router.post("/:id", newMealProvider);
router.get("/", (req, res) => {
	res.send("hi");
});
module.exports = router;
