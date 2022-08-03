import axios from 'axios';
import {CART_ADD_ITEM} from '../constants/cartConst'

export const addToCart = (id, qty) =>  async(dispatch, getState) => {
try {
    const response =  await axios.get(`http://localhost:5000/api/v1/products/${id}`)


    dispatch({
        type: CART_ADD_ITEM, 
        payload: {
           
                product: response.data.data._id,
                name: response.data.data.name,
                image: response.data.data.image,
                price: response.data.data.price,
                countInStock: response.data.data.countInStock,
                qty: qty,
              },

        
    })

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
    
} catch (error) {
    console.log(error.message)
}
}
