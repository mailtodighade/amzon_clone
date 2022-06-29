import React, { useEffect, useState } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import { listProducts } from "../action/ProductAction";
import Header from "../components/Header";
import Footer from "../components/Footer";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import ErrorScreeen from "./ErrorScreeen";

const HomeScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  const productList = [];

  const productsList = useSelector((state) => state.products);
   const {loading, products, error} = productsList

  // const loading = false;
  // const error = false
  // const products = true
console.log(loading, products?.data, error)

  const renderProductCard = (data) => {
    console.log(data, 'data inside function')
    return data.map((el) => {
      return (
        <ProductCard
          key={el._id}
          product_name={el.name}
          product_image={el.image}
          product_price={el.price}
          vendor_name={el.vendorName}
          product_id = {el._id}
        />
      );
    });
  };
  return (
    <>
      <Header />
      <Container maxWidth="xl" sx={{ marginTop: "15px" }}>
        <Grid container spacing={2}>
         {loading ?  <Box
            sx={{
              
              width: "100%",
              height: '75vh',
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box sx={{
               width: '10%',
               height: '10%',
               margin: '10px',
               padding:'5px',
               
            }}>
              <CircularProgress />
            </Box>
          </Box> : null}
          {products?.data ? renderProductCard(products?.data) : null}
          {error ? <ErrorScreeen /> : null}
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default HomeScreen;
