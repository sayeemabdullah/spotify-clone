import React from "react";
import { AppBar, Toolbar, Typography, makeStyles } from "@material-ui/core";
import logo from "./Spotify_Logo_NavBar.png";
import IconButton from "@material-ui/core/IconButton";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import MenuIcon from "@material-ui/icons/Menu";

const styles = makeStyles({
  default: {
    backgroundColor: "black",
    opacity: "0.6",
    "@media (max-width: 991px)": {
      opacity: "1",
    },
  },
  rightToolbar: {
    marginLeft: "auto",
  },
  spanFont: {
    fontSize: "1rem",
    fontWeight: "bold",
    position: "relative",
    "&:hover": {
      color: "#2FB150",
    },
    "@media (max-width: 991px)": {
      display: "none",
    },
  },
  iconDiv: {
    fontWeight: "bold",
    fontSize: "1rem",
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    "&:hover": {
      color: "#2FB150",
    },
    "@media (max-width: 991px)": {
      display: "none",
    },
  },
  burger: {
    display: "none",
    alignItems: "center",
    flexWrap: "wrap",
    "&:hover": {
      color: "#2FB150",
    },
    "@media (max-width: 991px)": {
      display: "flex",
    },
  },
  contents: {
    padding: "0 12rem 0 12rem",
    "@media (max-width: 991px)": {
      padding: "0 0 0 0",
    },
    "@media (max-width: 1085px)": {
      padding: "0 0 0 0",
    },
  },
  logo: {
    height: "35px",
    "@media (max-width: 293px)": {
      height: "25px",
    },
  },
});

export default function NavBar() {
  const classes = styles();
  return (
    <>
      <AppBar position="sticky" className={classes.default}>
        <div className={classes.contents}>
          <Toolbar>
            <Typography variant="title">
              <img className={classes.logo} src={logo}></img>
            </Typography>
            <section className={classes.rightToolbar}>
              <IconButton color="inherit">
                <span className={classes.spanFont}>Premium</span>
              </IconButton>
              <IconButton color="inherit">
                <span className={classes.spanFont}>Support</span>
              </IconButton>
              <IconButton color="inherit">
                <span className={classes.spanFont}>Download</span>
              </IconButton>
              <IconButton color="inherit">
                <div className={classes.iconDiv}>
                  <AccountCircleIcon></AccountCircleIcon>
                  <span style={{ margin: 10 }}>Profile</span>
                </div>
              </IconButton>
              <IconButton color="inherit">
                <div className={classes.burger}>
                  <MenuIcon></MenuIcon>
                </div>
              </IconButton>
            </section>
          </Toolbar>
        </div>
      </AppBar>
    </>
  );
}
