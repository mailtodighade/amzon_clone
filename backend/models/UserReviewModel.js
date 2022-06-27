import mongoose from 'mongoose';


const UserReviewsSchema = mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User'},
    product: {type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Product'},
    rating: {type: Number, required: true, default: 0}, 
    comment: {type: String, required: true}
})


const UserReview = mongoose.model('UserReview', UserReviewsSchema)

export default UserReview;

