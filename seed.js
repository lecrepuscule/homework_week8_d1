var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/ecommerce");

var User = require("./models/user");
var Product = require("./models/product");
var Order = require("./models/order");

// mongoose.connection.db.dropDatabase();

var product1 = new Product({
  name: "Junk",
  price: 20,
  description: "some people might pay good money for this piece of..."
});

var product2 = new Product({
  name: "Trash",
  price: 44,
  description: "Someone's treasure..."
});

product1.save(function(err, product){
  if (err) console.log(err);
  console.log(product.name + " created");

  var order1 = new Order({
    // price: 20,
    shippingAddress: {
      street: "Back",
      postcode: "WC1",
      town: "London",
      country: "UK"
    }
  });

  order1.users.push({
    name: "Harshit",
    gender: "M",
    dob: "1 Aug 1990"
  });

  order1.products.push(product);

  order1.save(function(err, order){
    Order.findOne(order.id).populate("products").exec(function(err, orderDetails){
      if (err) console.log(err);
      order.setBalance();
      console.log(orderDetails);
    });
  });

  product2.save(function(err, product){
    if (err) console.log(err);
    console.log(product.name + " created");
    order1.products.push(product);
    order1.save(function(err, order){
    Order.findOne(order.id).populate("products").exec(function(err, orderDetails){
        if (err) console.log(err);
        order.setBalance();
      })
    });
  })
});






