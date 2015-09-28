var express = require("express");
var User = require("../models/user")

var usersRouter = express.Router();


usersRouter.get("/", function(req, res){
  User.find({}, function(err, users){
    if (err) console.log(err);
    res.json(users);
  });
})

module.exports = usersRouter;


