import React from "react";
import { AppBar, Toolbar, Typography, makeStyles } from "@material-ui/core";
import logo from "./Spotify_Logo_NavBar.png";
import IconButton from "@material-ui/core/IconButton";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const styles = makeStyles({
  default: {
    backgroundColor: "black",
    opacity: "0.6",
  },
  rightToolbar: {
    marginLeft: "auto",
  },
  spanFont: {
    fontSize: "1rem",
    fontWeight: "bold",
    "&:hover": {
      color: "#2FB150",
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
  },
  contents: {
    marginLeft: "auto",
    marginRight: "auto",
    width: "80rem",
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
              <img src={logo} height={35}></img>
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
            </section>
          </Toolbar>
        </div>
      </AppBar>
    </>
  );
}
