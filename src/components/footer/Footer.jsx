import React from "react";
import { makeStyles } from "@material-ui/styles";
import logo from "./Spotify_Logo_NavBar.png";

const styles = makeStyles({
  default: {
    backgroundColor: "black",
    padding: "10rem",
  },
  firstList: {
    marginLeft: "15rem",
    marginTop: "-5rem",
    color: "white",
  },
  secondList: {
    marginLeft: "25rem",
    marginTop: "-7.6rem",
    color: "white",
  },
  image: {
    height: "2rem",
    marginTop: "-10rem",
  },
});

export default function Footer() {
  const classes = styles();
  return (
    <>
      <div className={classes.default}>
        <img src={logo} className={classes.image}></img>

        {/* <dl className={classes.firstList}>
          <dd
            style={{
              color: "white",
              opacity: "0.6",
              marginBottom: "0.5rem",
              fontSize: "0.8rem",
            }}
          >
            COMPANY
          </dd>
          <dd style={{ marginBottom: "0.7rem" }}>About</dd>
          <dd style={{ marginBottom: "0.7rem" }}>Jobs</dd>
          <dd style={{ marginBottom: "0.7rem" }}>For the Record</dd>
        </dl>
        <dl className={classes.secondList}>
          <dd
            style={{
              color: "white",
              opacity: "0.6",
              marginBottom: "0.5rem",
              fontSize: "0.8rem",
            }}
          >
            COMMUNITIES
          </dd>
          <dd style={{ marginBottom: "0.7rem" }}>For Artists</dd>
          <dd style={{ marginBottom: "0.7rem" }}>Developers</dd>
          <dd style={{ marginBottom: "0.7rem" }}>Advertising</dd>
          <dd style={{ marginBottom: "0.7rem" }}>Investors</dd>
          <dd style={{ marginBottom: "0.7rem" }}>Vendors</dd>
        </dl> */}
      </div>
    </>
  );
}
