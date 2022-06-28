import { Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
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
          props: { variant: "h6" },
          style: {
            fontFamily: "Roboto",
            fontSize: "16px",
            lineHeight: "16.8px",
            fontWeight: "700",
            margin: '6px 0px 14px',
            color: '#ffffff'
          },
        },
        {
          props: { variant: "subtitle1" },
          style: {
            fontFamily: "Roboto",
            fontSize: "12px",
            lineHeight: "14px",
            fontWeight: "400",
          },
        },
      ],
    },
  },
});

const Footer = () => {
  return (
    <>
    <ThemeProvider theme={theme}>
      
      <Box
        sx={{ backgroundColor: "#232F3E", marginTop: "20px", height: "17vh" }}
        >
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <Typography variant = 'h6'>Get to Know Us</Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography variant = 'h6'>Connect with Us</Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography variant = 'h6'>Make Money with Us</Typography>
            </Grid>
            <Grid item xs={3}>
              <Typography variant = 'h6'>Let Us Help You</Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
        </ThemeProvider>
    </>
  );
};

export default Footer;
