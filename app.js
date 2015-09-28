var express = require("express");
var bodyParser = require("body-parser");
var usersRouter = require("./user-router");


// var mongoose = require("mongoose");

var app = express();
// mongoose.connect("mongodb://localhost/ecommerce");




// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

usersRouter.get("/", function(req, res){
  User.find({}, function(err, users){
    if (err) console.log(err);
    res.json(users);
  });
})

app.use("/users", usersRouter);


app.listen(3000);