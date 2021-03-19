import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import imageLink from "../card/musicAlbumCover/1000.jpg";

const styles = () => ({
  root: {
    maxWidth: "25rem",
    height: "25rem",
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
