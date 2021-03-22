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
    "@media (max-width: 1189px)": {
      height: "20em",
      width: "20em",
      padding: "2px",
    },
    // "@media (max-width: 949px)": {
    //   height: "13em",
    //   width: "13em",
    // },
    // "@media (max-width: 853px)": {
    //   height: "13em",
    //   width: "13em",
    //   padding: "3px",
    // },
    // "@media (max-width: 841px)": {
    //   height: "11em",
    //   width: "11em",
    //   padding: "3px",
    // },
    // "@media (max-width: 745px)": {
    //   height: "10em",
    //   width: "10em",
    //   padding: "2px",
    // },
    // "@media (max-width: 745px)": {
    //   height: "9em",
    //   width: "9em",
    //   padding: "1px",
    // },
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
