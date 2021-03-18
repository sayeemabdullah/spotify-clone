import { makeStyles } from "@material-ui/styles";
import React from "react";
import LaunchWebPlayerButton from "../button/LaunchWebPlayerButton";

const styles = makeStyles({
  default: {
    backgroundColor: "white",
    paddingTop: "2rem",
  },
  headingText: {
    fontSize: "3rem",
  },
  secondaryText: {
    fontSize: "1.2rem",
    fontWeight: "lighter",
    marginTop: "-1.2rem",
    marginBottom: "1rem",
  },
});

export default function SecondDiv() {
  const classes = styles();
  return (
    <>
      <div className={classes.default}>
        <h1 className={classes.headingText}>Looking for music?</h1>
        <h2 className={classes.secondaryText}>
          Start listening to the best new releases.
        </h2>
        <LaunchWebPlayerButton>LAUNCH WEB PLAYER</LaunchWebPlayerButton>
      </div>
    </>
  );
}
