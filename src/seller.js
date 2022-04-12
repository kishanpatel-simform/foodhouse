const path = require("path");
const express = require("express");
const hbs = require("hbs");
require("./db/mongoose");

const app = express();
const port = process.env.PORT || 3001;

const mealProvidersRouter = require("./routes/mealProviders/mealProviders");
const usersRouter = require("./routes/users/users");
const { json } = require("express/lib/response");

const publicDirectory = path.join(__dirname, "../public");
const viewPath = path.join(__dirname, "templates/views/seller");
const partialsPath = path.join(__dirname, "templates/partials/seller");

app.set("view engine", "hbs");
app.set("views", viewPath);
hbs.registerPartials(partialsPath);

app.use(express.static(publicDirectory));
app.use(express.json());
app.use("/mealProviders", mealProvidersRouter);
app.use("/users", usersRouter);
app.get("/seller", (req, res) => {
	res.render("index", {
		title: "This is Admin Page",
		name: "Kishan Patel",
	});
	//res.send("Hello")
});
app.get("/seller/mealitems", (req, res) => {
	res.render("mealitems", {
		title: "This is Admin Page",
		name: "Kishan Patel",
	});
	//res.send("Hello")
});

app.listen(port, () => {
	console.log("Server Started");
});
