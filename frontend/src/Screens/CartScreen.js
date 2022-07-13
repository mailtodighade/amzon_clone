import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {useParams, useLocation} from 'react-router-dom'
import {cartAction} from '../action/cartAction'

const CartScreen = () => {
  const  dispatch = useDispatch();

  let location = useLocation();
  const param =useParams();
 const productID = param.id ? param.id : '';
 const qty = location.search ? location.search.split('=')[1] : '';
 

 useEffect(() => {
   dispatch(cartAction(productID, qty));

 }, [])
 
 const cart = useSelector(state => state.cart);
 console.log(cart, 'cart from state..')
  
  
  return (
    <div>CartScreen</div>
  )
}

export default CartScreen