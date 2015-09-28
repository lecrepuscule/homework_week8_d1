var mongoose = require("mongoose");
var User = mongoose.model("User");

var orderSchema = new mongoose.Schema({
  price: Number,
  createdAt: {type: Date, default: Date.now},
  shippingAddress: {
    street: String,
    postcode: String,
    town: String,
    country: String
  },
  products: {type: mongoose.Schema.ObjectId, ref: "Product"},
  users: [User.schema]
});

var Order = mongoose.model("Order", orderSchema);

module.exports = Order;