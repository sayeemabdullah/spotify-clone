import { makeStyles } from "@material-ui/styles";
import React from "react";
import GetPremiumButton from "../button/GetPremiumButton";

const styles = makeStyles({
  default: {
    backgroundColor: "#F2B857",
    paddingTop: "10rem",
    paddingBottom: "10rem",
  },
  headingText: {
    color: "white",
    fontSize: "4.5rem",
    fontWeight: "bold",
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
