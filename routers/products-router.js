var express = require("express");
var Product = require("../models/product")

var productsRouter = express.Router();


productsRouter.get("/", function(req, res){
  Product.find({}, function(err, products){
    if (err) console.log(err);
    res.json(products);
  });
})

module.exports = productsRouter;