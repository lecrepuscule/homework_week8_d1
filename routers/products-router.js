var express = require("express");
var Product = require("../models/product");
var Order = require("../models/order");

var productsRouter = express.Router();


productsRouter.get("/", function(req, res){
  Product.find({}, function(err, products){
    if (err) console.log(err);
    res.json(products);
  });
});

productsRouter.post("/", function(req, res){
  var product = Product(req.body);
  product.save(function(err, newProduct){
    if (err) console.log(err);
    res.json(newProduct);
  });
});

productsRouter.delete("/:id", function(req, res){
  console.log(req.params.id);
  Order.distinct("products", function(err, order){
    if (err) {
      console.log(err);
    } else if (order.indexOf(req.params.id) !== 1) {
      console.log("dependency exists for the product");
    } else {
      Product.findByIdAndRemove(req.params.id, function(err, removedProduct){
        if (err) console.log(err);
        res.json(removedProduct);
      })
    }
  }) 
})

module.exports = productsRouter;