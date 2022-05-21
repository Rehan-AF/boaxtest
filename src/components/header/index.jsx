import { Box, Button, InputBase, makeStyles } from "@material-ui/core";
import React from "react";
import logo from "../../assets/logo.png";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";

const Header = () => {
  const classes = useStyles();
  return (
    <Box className={classes.header}>
      <Box className={classes.logoContainer}>
        <img src={logo} alt="logo" />
        <Box className={classes.search}>
          <InputBase placeholder="search" />
          <SearchIcon />
        </Box>
      </Box>
      <Box></Box>
      <Box>
        <Link to="/" className={classes.links}>
          MARKET
        </Link>
        <Link to="/" className={classes.links}>
          ARTIST
        </Link>
        <Link to="/" className={classes.links}>
          ABOUT US
        </Link>
        <Link to="/" className={classes.links}>
          BLOG
        </Link>
        <Link to="/" className={classes.links}>
          FAQ
        </Link>
      </Box>
      <Box className={classes.Loginbox}>
        <Link to="/" className={classes.loginLInk}>
          Register/login
        </Link>
        <Button className={classes.Gold}>Create</Button>
        <Button className={classes.blue}>Connect Wallet</Button>
      </Box>
    </Box>
  );
};

export default Header;
const useStyles = makeStyles((theme) => ({
  header: {
    display: "flex",
    justifyContent: "space-between",
    height: "80.84px",
    alignItems: "center",
    padding: "0 40px",
  },
  logoContainer: {
    display: "flex",
    gap: "20px",
    alignItems: "center",
  },
  blue: {
    backgroundColor: "#0A1A72",
    color: "white",
    height: "52.6px",
    width: "174px",

    "&:hover": {
      backgroundColor: "#0A1A72",
    },
  },
  Gold: {
    backgroundColor: "#B3A16C",
    color: "white",
    height: "52.6px",
    width: "131px",

    "&:hover": {
      backgroundColor: "#B3A16C",
    },
  },
  search: {
    display: "flex",
    alignItems: "center",
    border: "1px solid #959595",
    borderRadius: "10px",
    paddingLeft: "10px",
  },
  links: {
    color: "#333333",
    fontWeight: "700",
    fontSize: "18px",
    marginRight: "18px",
    textDecoration: "none",
  },
  loginLInk: {
    color: "#333333",
    marginRight: "18px",
    textDecoration: "none",
  },
  Loginbox: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
}));
