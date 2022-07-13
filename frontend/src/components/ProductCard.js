import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import phone from '../assests/images/product_images/phone.jpg'
import alexa from '../assests/images/product_images/alexa.jpg'
import camera from '../assests/images/product_images/camera.jpg'
import Grid from '@mui/material/Grid';
import {Link} from 'react-router-dom'



const defaultTheme = createTheme();

const theme = createTheme({
    components: {
      MuiAppBar: {
        variants: [
          {
            props: { color: "secondary" },
            style: {
              backgroundColor: "#131921",
            },
          },
        ],
      },
      MuiTypography: {
        variants: [
          {
            props: { variant: 'h1' },
            style: {
              fontFamily: "Roboto",
              fontSize: '16px', 
              lineHeight: '24px', 
              fontWeight: '400'
            },
          },
          {
            props: { variant: 'subtitle1' },
            style: {
              fontFamily: "Roboto",
              fontSize: '14px', 
              lineHeight: '20px', 
              fontWeight: '400',
              color: '#A1D0E5'
            },
          },
          {
            props: { variant: 'subtitle2' },
            style: {
              fontFamily: "Roboto",
              fontSize: '21px', 
              lineHeight: 'normal', 
              fontWeight: '400',
              color: "#b12704"
            },
          },
        ],
      }
    },
  });

export default function ProductCard({product_id, product_name, vendor_name,product_price, product_image}) {
    const [value, setValue] = React.useState(2.5);
  return (
    <ThemeProvider theme={theme}>
        <Grid  item xs={3}>

    <Box
    sx={{
      width: '259.594px',
      height: '425.500px',
      backgroundColor: '#FFFFFF',
      marginTop: '20px',
      marginLeft: '20px'

    }}
  >
    <Box
    onClick = {() =>{ console.log(product_id, 'id')}}
        sx = {{
            width: '259.594px',
            height: '206.594px',
            backgroundColor: '#F8F8F8',
            padding: '0px 8px 0 px', 
            cursor: 'pointer'
           
        }}>
            <img src = {product_image}  style={{
                maxWidth: '100%', 
                maxHeight: '100%', 
                display: 'block'
            }}/>
    </Box>
    <Link  className = 'product_link' to = {`product/${product_id}`}>
      <Typography sx = {{marginLeft: '7px', marginTop: '5px'}} vairant = 'h1'>{product_name}</Typography>
    </Link>
     <Typography sx = {{marginLeft: '7px'}} variant = 'subtitle1'>{vendor_name}</Typography>
     <Rating sx = {{width: '80px', height: '18px'}} name="read-only" value={value} readOnly precision={0.5}/>
     <Typography sx = {{marginLeft: '7px'}} variant = 'subtitle2'>{product_price}</Typography>

    </Box>
                </Grid>
    </ThemeProvider>
  );
}