import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import logo from "../assests/images/Logo/amazon-com.svg";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";

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
            fontSize: "14px",
            lineHeight: "15px",
            fontWeight: "700",
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

export default function Header() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ cursor: "pointer" }}>
        <AppBar position="static" color="secondary">
          <Toolbar>
            <Box>
              <Box sx={{ postion: "relative", top: "10px" }}>
                <img src={logo} style={{ width: "159px", height: "63px" }} />
              </Box>
            </Box>
            <Box sx={{ marginLeft: "10px" }}>
              <Typography sx={{ paddingLeft: "8px" }} variant="subtitle1">
                hello
              </Typography>
              <Box sx={{ display: "flex" }}>
                <LocationOnIcon sx={{ height: "15px" }} />
                <Typography variant="h6">Select your address</Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                width: "699px",
                height: "47px",
                marginLeft: "10px",
                backgroundColor: "white",
                borderRadius: "5px",
              }}
            >
              <input
                type="text"
                style={{
                  height: "30px",
                  marginTop: "7px",
                  width: "574px",
                  outline: "none",
                  backgroundColor: "transparent",
                  color: "black",
                  border: "0px solid",
                  marginLeft: "5px",
                  fontFamily: "Roboto",
                  fontSize: "16px",
                }}
              />
              <Box
                sx={{
                  backgroundColor: "#F3A847",
                  width: "50px",
                  marginLeft: "116px",
                  borderRadius: " 0px 5px 5px 0px",
                }}
              >
                <SearchIcon
                  sx={{
                    marginLeft: "6px",
                    marginTop: "10px",
                    color: "#131921",
                  }}
                  fontSize="large"
                />
              </Box>
            </Box>
            <Box sx={{ marginLeft: "15px" }}>
              <Typography variant="subtitle1">hello, sign in</Typography>

              <Typography variant="h6">Account & Lists</Typography>
            </Box>
            <Box sx={{ marginLeft: "15px", marginRight: "20px" }}>
              <Typography variant="subtitle1">Returns</Typography>

              <Typography variant="h6">& Orders</Typography>
            </Box>

           
              <ShoppingCartIcon fontSize="large" />
              <Typography sx={{ marginTop: "15px" }}>Cart</Typography>
            
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}
