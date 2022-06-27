import mongoose from 'mongoose';
import users from './data/users.js'
import products from './data/products.js';
import User from './models/UserModel.js'
import Product from './models/ProductModel.js';
import Order from './models/OrderModel.js';
import UserReview from './models/UserReviewModel.js'
import dotenv from 'dotenv';
import connectDB from './database/db.js'


dotenv.config();
connectDB();


const importData = async () =>{
try {
     await User.deleteMany();
     await Product.deleteMany();
     await Order.deleteMany();

    let createdUsers =  await User.insertMany(users);
   

      const adminUser = createdUsers[0]._id;
      
     const adminProducts = products.map(product =>{
        return {...product, user: adminUser}
     })
    await Product.insertMany(adminProducts);
    console.log('data imported.....')
      process.exit();
} catch (error) {
    console.error(error.message);
    process.exit("1")
}
}


const deleteData = async () =>{
    try {
         await User.deleteMany();
         await Product.deleteMany();
         await Order.deleteMany();
    
        
        console.log('data removed.......')
          process.exit();
    } catch (error) {
        console.error(error.message);
        process.exit(1)
    }
    };


    
if(process.argv[2] === '-d'){
    deleteData();
}else{
    importData();
}

