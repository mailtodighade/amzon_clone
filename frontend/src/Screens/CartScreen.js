import { useSelect } from '@mui/base';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {useParams, useLocation} from 'react-router-dom'
import {addToCart} from '../action/cartAction'
import Header from '../components/Header'

const CartScreen = () => {
  const  dispatch = useDispatch();

  let location = useLocation();
  const param =useParams();
 const productID = param.id ? param.id : '';
 const qty = location.search ? location.search.split('=')[1] : '';
 

useEffect(() =>{
  if(productID){
    
    dispatch(addToCart(productID, qty));
  }
}, [dispatch, productID, qty])


const {cartItems} = useSelector(state => state.cart)
  console.log(cartItems, 'cartItmes...')
  return (
    <>
    <Header />
    </>
  )
}

export default CartScreen