import {CART_ADD_ITEM} from '../constants/cartConst';
import axios from 'axios';


export const  cartAction = (id, qty) =>  async(dispatch, getState) => {
    const response  = await axios.get(`http://localhost:5000/api/v1/products/${id}`);

    console.log(response.data.data);
    dispatch({
       type: CART_ADD_ITEM, 
       payload: {
        product: response.data.data._id, 
        name: response.data.data.name, 
        image: response.data.data.image,
        price: response.data.data.price, 
        countInStock: response.data.data.countInStock,
        qty: parseInt(qty)
       }
    })

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
} 