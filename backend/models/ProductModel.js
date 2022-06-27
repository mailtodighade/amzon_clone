import mongoose from 'mongoose';

const productSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId, 
        required: true,
        ref: 'User'
    },
    name: {
        type: String, 
        required: true
    },
    image: {
        type: String, 
        required: true, 
       
    },
    description: {
        type: String, 
        
    },
    reviews: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserReview'
    },
    brand: {
        type: String, 
        
    },
    category: {
        type: String, 
        
    },
    price: {
        type: Number, 
        required: true,
        default: 0 
        
    },
    countInStock: {
        type: String, 
        required : true,
        default: 0
    }, 
    rating: {
        type: Number, 
        default: 0, 
        required: true
    }, 
    numReviews: {
        type: Number, 
        required: true, 
        default: 0
    }, 
    vendorName: String,


}, {
    timestamp: true
})


const Product = mongoose.model('Product' , productSchema);
export default Product;



