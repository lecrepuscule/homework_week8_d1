var express = require("express");

var Order = require("../models/order")
var ordersRouter = express.Router();


ordersRouter.get("/", function(req, res){
  Order.find({}, function(err, orders){
    if (err) console.log(err);
    res.json(orders);
  });
})

ordersRouter.post("/", function(req, res){
  var order = Order(req.body);
  order.save(function(err, newOrder){
    if (err) console.log(err);
    res.json(newOrder);
  });
})

module.exports = ordersRouter;