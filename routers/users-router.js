var express = require("express");
var User = require("../models/user");
var Order = require("../models/order");

var usersRouter = express.Router();


usersRouter.get("/", function(req, res){
  Order.distinct("users", function(err, users){
    if (err) console.log(err);
    console.log("users index has " + users);
    Array.isArray(users);
    console.log('unique users in db ', users);
    res.json(users);
  });
})

module.exports = usersRouter;


