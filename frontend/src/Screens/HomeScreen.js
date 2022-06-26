import React, { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
//import productList from '../data/products'

import ProductCard from '../components/ProductCard';
import Header from '../components/Header';
import Footer from '../components/Footer';
import axios from 'axios';
const HomeScreen = () => {
  const [productList, setProductList] = useState([])

useEffect(() => {
 (async() =>{
  try {
    const res = await axios.get('http://localhost:5000/api/v1/products')
    if(res.status === 200){
      setProductList(res.data.data)
    }  
  } catch (error) {
    console.log(error.message)
  }
  
 })()
}, [])


    const renderProductCard = (data) => {
       return  data.map(el =>{
            return <ProductCard 
            key = {el._id}
            product_name={el.name}
            product_image= {el.image}
            product_price = {el.price}
            vendor_name = {el.vendorName}
            
            />
        })
     }
  return (
    <>
    <Header />
    <Container maxWidth= 'xl' sx= {{marginTop: '15px'}}>
        <Grid container spacing={2}>
    {renderProductCard(productList)}
        </Grid>
    </Container>
    <Footer />
    </>
  )
}

export default HomeScreen