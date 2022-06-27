import mongoose from "mongoose";

const OrderSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  orderItmes: [
    {
      name: { type: String, required: true },
      qunatity: { type: Number, required: true },
      price: { type: Number, required: true },
      image: { type: String, required: true },
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true,
      },
    },
  ],
  shippingAdress: {
    street: { type: String, required: true },
    city: { type: String, required: true },
    postalcode: { type: String, required: true },
    country: { type: String, required: true },
  },
  paymentMethod: {
    type: String, 
    required: true,
  }, 
  paymentResult: {
    id: {type:String, required: true},
    status: {type:String, required: true},
    update_time: {type:String, required: true},
    email: {type:String, required: true}
  }, 
  taxPrice: {
    type: Number, 
    required: true, 
    default: 0.0
  }, 
  shippingPrice: {
    type: Number, 
    required: true, 
    default: 0.0
  }, 
  totalPrice: {
    type: Number, 
    required: true, 
    default: 0.0
  }, 
  paidAt: {
    type: Date
  }, 
  isDelivered: {
    type: Boolean, 
    required: true, 
    default: false
  }, 
  deliverAt: {
    type: Date,
  }, 

}, {
    timestamp: true
});



const Order = mongoose.model('Order', OrderSchema);

export default Order;
