var express = require("express");
var Product = require("../models/product")

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

// productsRouter.delete("/:id", function(req, res){
//   Product.find({}, function(err, products){
//     if (err) console.log(err);
//     res.json(products);
//   });
// })

module.exports = productsRouter;