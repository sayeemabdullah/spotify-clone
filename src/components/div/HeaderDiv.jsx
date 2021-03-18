import { makeStyles } from "@material-ui/styles";
import React from "react";
import GetPremiumButton from "../button/GetPremiumButton";
import NavBar from "../navBar/NavBar";

const styles = makeStyles({
  default: {
    backgroundColor: "#F2B857",
    padding: "11rem",
  },
  headingText: {
    color: "white",
    fontSize: "4rem",
    fontWeight: "bolder",
  },
});

export default function HeaderDiv() {
  const classes = styles();
  return (
    <>
      <div className={classes.default}>
        <h1 className={classes.headingText}>Go Premium. Be happy.</h1>
        <GetPremiumButton>GET SPOTIFY PREMIUM</GetPremiumButton>
      </div>
    </>
  );
}
