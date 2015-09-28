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
  products: [{type: mongoose.Schema.ObjectId, ref: "Product"}],
  users: [User.schema]
});

orderSchema.methods.getTotalPrice = function(){
  // Order
  // .aggregate({$match: { _id: mongoose.Schema.Types.ObjectId(this.id)}})
  // .unwind("products")
  // .group ({_id: null}, {balance: {$sum: "$products.price"}})
  // .exec(function (err, sum){
  //     if (err) console.log(err);
  //     console.log("this is the sum "+sum)
  // })
  Order.findOne(this.id).populate("products").exec(function(err, order){
    if (err) console.log(err);

    order.products.reduce(function(sum, product){
    console.log(product.price);
    return sum += product.price;
    },0)
  })
};

var Order = mongoose.model("Order", orderSchema);


module.exports = Order;