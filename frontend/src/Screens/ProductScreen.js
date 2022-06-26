import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import tableTennis from "../assests/images/product_images/table-tennis.jpg";
import { createTheme, ThemeProvider } from "@mui/material/styles";

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
      ],
    },
  },
});

const ProductScreen = () => {
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
                  src={tableTennis}
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    display: "block",
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={5}>
              <Typography variant="h6">
                STIGA 3-Star Table Tennis Balls, (6-Pack)
              </Typography>
              <Typography variant = 'subtitle1'>brand: Tibhar</Typography>
              <Rating sx = {{width: '80px', height: '18px'}} name="read-only" value={value} readOnly precision={0.5}/>
              <hr style = {{marginTop: '10px' , backgroundColor: 'grey', }}/>
            </Grid>
            <Grid item xs={2}>
              asdfasdfasdfasdf
            </Grid>
          </Grid>
        </Container>
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default ProductScreen;
