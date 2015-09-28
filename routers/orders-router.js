var express = require("express");

var Order = require("../models/order")
var ordersRouter = express.Router();


ordersRouter.get("/", function(req, res){
  Order.find({}, function(err, orders){
    if (err) console.log(err);
    res.json(orders);
  });
})

module.exports = ordersRouter;