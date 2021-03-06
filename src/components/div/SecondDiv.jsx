import { makeStyles } from "@material-ui/styles";
import React from "react";
import LaunchWebPlayerButton from "../button/LaunchWebPlayerButton";
import MusicCardGrid from "../card/MusicCardGrid";
import MusicCardSlider from "../card/MusicCardSlider";

const styles = makeStyles({
  default: {
    backgroundColor: "white",
    paddingTop: "90px",
    "@media (max-width: 1295px)": {
      paddingTop: "50px",
    },
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
    "@media (max-width: 1295px)": {
      padding: "50px",
    },
    "@media (max-width: 767px)": {
      padding: "50px 0 50px 0",
    },
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
          <MusicCardSlider></MusicCardSlider>
        </div>
      </div>
    </>
  );
}
