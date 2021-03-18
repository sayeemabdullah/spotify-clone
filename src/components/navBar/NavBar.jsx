import React from "react";
import { AppBar, Toolbar, Typography, makeStyles } from "@material-ui/core";
import logo from "./Spotify_Logo_NavBar.png";

const styles = makeStyles({
  default: {
    backgroundColor: "black",
    opacity: "0.6",
  },
});

export default function NavBar() {
  const classes = styles();
  return (
    <>
      <AppBar position="sticky" className={classes.default}>
        <Toolbar>
          <Typography variant="title">
            <img src={logo} height={35}></img>
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
}
