import React, { useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import tableTennis from "../assests/images/product_images/table-tennis.jpg";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {useDispatch, useSelector} from 'react-redux'
import {productDetail} from '../action/ProductAction'
const defaultTheme = createTheme();

const theme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: { variant: "h6" },
          style: {
            fontFamily: "Roboto",
            fontSize: "24px",
            lineHeight: "32px",
            fontWeight: "400",
            color: "#0f1111",
          },
        },
        {
          props: { variant: "subtitle1" },
          style: {
            fontFamily: "Roboto",
            fontSize: "14px",
            lineHeight: "20px",
            fontWeight: "400",
            color: 'blue'
          },
        },
        {
          props: { variant: "h3" },
          style: {
            fontFamily: "Roboto",
            fontSize: "14px",
            lineHeight: "20px",
            fontWeight: "700",
            color: '#0f1111'
          },
        },
        {
          props: { variant: "subtitle2" },
          style: {
            fontFamily: "Roboto",
            fontSize: "14px",
            lineHeight: "20px",
            fontWeight: "400",
            color: '#0f1111'
          },
        },
        {
          props: { variant: 'h1' },
          style: {
            fontFamily: "Roboto",
            fontSize: '26px', 
            lineHeight: '24px', 
            fontWeight: '400'
          },
        }
      ],
    },
  },
});

const ProductScreen = () => {
  const dispatch = useDispatch();
const url = window.location.pathname;
const id = url.split('/')[2];

useEffect(() =>{
  dispatch(productDetail(id))
}, [])

const productInfo = useSelector(state => state.productDetail);

    const [value, setValue] = React.useState(2.5);
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <Container maxWidth="xl" sx={{ marginTop: "40px" }}>
          <Grid container spacing={2}>
            <Grid item xs={5}>
              <Box sx={{ backgroundColor: "#ffffff", height: "500px" }}>
                <img
                  src= {productInfo?.productDetail?.data?.image}
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    display: "block",
                  }}
                  alt = {productInfo?.productDetail?.data?.name}
                />
              </Box>
            </Grid>
            <Grid item xs={5}>
              <Typography variant="h6">
                {productInfo?.productDetail?.data?.name}
              </Typography>
              <Typography variant = 'subtitle1'>brand: {productInfo?.productDetail?.data?.brand}</Typography>
              <Rating sx = {{width: '80px', height: '18px'}} name="read-only" value={value} readOnly precision={0.5}/>
              <hr style = {{marginTop: '10px' , backgroundColor: 'grey', }}/>

                <Box sx = {{marginTop: '10px'}}>
              <Grid container spacing = {2} >

                <Grid item xs ={6}>
                  <Typography sx = {{padding: '5px'}} variant="h3">category: </Typography>
                  <Typography sx = {{padding: '5px'}} variant="h3">vandor: </Typography>
                  <Typography  sx = {{padding: '5px'}}variant="h3">Colour: </Typography>
                  <Typography  sx = {{padding: '5px'}}variant="h3">Material: </Typography>
                  <Typography  sx = {{padding: '5px'}} variant="h3">Item Weight: </Typography>
                </Grid>
                
                <Grid item xs ={6}>
                <Typography  sx = {{padding: '5px'}} variant="subtitle2">
                  {productInfo?.productDetail?.data?.category}
                </Typography>
                <Typography  sx = {{padding: '5px'}} variant="subtitle2">
                  {productInfo?.productDetail?.data?.vendorName}
                </Typography>
                <Typography  sx = {{padding: '5px'}} variant="subtitle2">
                  white/red/yellow
                </Typography>
                <Typography  sx = {{padding: '5px'}} variant="subtitle2">
                  plastic/abs/amstrang
                </Typography>
                <Typography  sx = {{padding: '5px'}} variant="subtitle2">
                  12 grams
                </Typography>
                </Grid>
              </Grid>
                </Box>
                <hr style = {{marginTop: '10px', marginBottom: '10px' , backgroundColor: 'grey', }}/>
                <Typography variant = 'h3' sx = {{marginBottom: '10px'}}>About this item</Typography>
                <Typography variant = 'subtitle2'>{productInfo?.productDetail?.data?.description}</Typography>
            </Grid>
            <Grid item xs={2}>
             <Box sx = {{height: '500px', widht: '150px', border: '2px solid grey',borderRadius: '4px'}}>
             
            <Typography variant = 'h1'>&#8377; {productInfo?.productDetail?.data?.price}</Typography>
             </Box>
            </Grid>
          </Grid>
        </Container>
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default ProductScreen;
