const express = require("express");
const router = new express.Router();
const { userSignup, getUsers } = require("../../controllers/users/users");
router.get("/users/hello", (req, res) => {
	res.send("hi");
});

router.post("/", userSignup);
router.get("/", getUsers);
module.exports = router;
