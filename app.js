var express = require("express");
var bodyParser = require("body-parser");
var usersRouter = require("./routers/users-router");
var productsRouter = require("./routers/products-router");
var ordersRouter = require("./routers/orders-router");
var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/ecommerce");
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/users", usersRouter);
app.use("/products", productsRouter);
app.use("/orders", ordersRouter);


app.listen(3000);