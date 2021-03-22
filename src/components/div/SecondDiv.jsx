import { makeStyles } from "@material-ui/styles";
import React from "react";
import LaunchWebPlayerButton from "../button/LaunchWebPlayerButton";
import MusicCardGrid from "../card/MusicCardGrid";

const styles = makeStyles({
  default: {
    backgroundColor: "white",
    paddingTop: "90px",
  },
  headingText: {
    fontSize: "3em",
    fontWeight: "bold",
    paddingBottom: "15px",
  },
  secondaryText: {
    fontSize: "1rem",
    fontWeight: "bold",
    paddingBottom: "25px",
  },
  gridContainer: {
    padding: "100px",
  },
});

export default function SecondDiv() {
  const classes = styles();
  return (
    <>
      <div className={classes.default}>
        <div className={classes.headingText}>Looking for music?</div>
        <div className={classes.secondaryText}>
          Start listening to the best new releases.
        </div>
        <LaunchWebPlayerButton>LAUNCH WEB PLAYER</LaunchWebPlayerButton>
        <div className={classes.gridContainer}>
          <MusicCardGrid></MusicCardGrid>
        </div>
      </div>
    </>
  );
}
