var express = require("express");
var mongoose = require("mongoose");
var User = require("./models/user")

mongoose.connect("mongodb://localhost/ecommerce");
var usersRouter = express.Router();


usersRouter.get("/", function(req, res){
  User.find({}, function(err, users){
    if (err) console.log(err);
    res.json(users);
  });
})

module.exports = usersRouter;


