import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";

const styles = () => ({
  root: {
    width: "25rem",
    height: "25rem",
    padding: "5px",
    "@media (max-width: 1429px)": {
      height: "25em",
      width: "25em",
      padding: "3px",
    },
    "@media (max-width: 1417px)": {
      height: "25em",
      width: "25em",
      padding: "2px",
    },
    "@media (max-width: 1411px)": {
      height: "23em",
      width: "23em",
      padding: "2px",
    },
    "@media (max-width: 1315px)": {
      height: "21em",
      width: "21em",
      padding: "2px",
    },
    "@media (max-width: 1219px)": {
      height: "19em",
      width: "19em",
      padding: "2px",
    },
    "@media (max-width: 1123px)": {
      height: "17em",
      width: "17em",
      padding: "2px",
    },
    "@media (max-width: 1027px)": {
      height: "15em",
      width: "15em",
      padding: "2px",
    },
    "@media (max-width: 931px)": {
      height: "14em",
      width: "14em",
      padding: "1.5px",
    },
    "@media (max-width: 880px)": {
      height: "12em",
      width: "12em",
      padding: "1.5px",
    },
    "@media (max-width: 784px)": {
      height: "10em",
      width: "10em",
      padding: "1.5px",
    },
    "@media (max-width: 767px)": {
      display: "none",
    },
  },
});

const MusicCard = ({ imageLink, classes }) => {
  return (
    <>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia component="img" height="inherit" image={imageLink} />
        </CardActionArea>
      </Card>
    </>
  );
};

export default withStyles(styles)(MusicCard);
