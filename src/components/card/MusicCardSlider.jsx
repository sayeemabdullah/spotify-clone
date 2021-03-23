import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import awakeep from "../card/musicAlbumCover/awakeep.jpg";
import jayball from "../card/musicAlbumCover/jayball.jpg";
import pain from "../card/musicAlbumCover/pain.jpg";
import thousand from "../card/musicAlbumCover/1000.jpg";
import starboy from "../card/musicAlbumCover/starboy.jpg";
import bohemainrhapsody from "../card/musicAlbumCover/bohemainrhapsody.jpg";

const useStyles = makeStyles({
  unorderList: {
    whiteSpace: "nowrap",
    overflowX: "auto",
    padding: "0",
    margin: "0",
    "&::-webkit-scrollbar": {
      display: "none",
    },
    "@media (min-width: 768px)": {
      display: "none",
    },
  },
  listItem: {
    display: "inline-block",
  },
  cardRoot: {
    width: "25rem",
    height: "25rem",
    padding: "4px",
  },
});

export default function MusicCardSlider() {
  const classes = useStyles();
  return (
    <>
      <ul className={classes.unorderList}>
        <li className={classes.listItem}>
          <Card className={classes.cardRoot}>
            <CardActionArea>
              <CardMedia component="img" image={awakeep} />
            </CardActionArea>
          </Card>
        </li>
        <li className={classes.listItem}>
          <Card className={classes.cardRoot}>
            <CardActionArea>
              <CardMedia component="img" image={jayball} />
            </CardActionArea>
          </Card>
        </li>
        <li className={classes.listItem}>
          <Card className={classes.cardRoot}>
            <CardActionArea>
              <CardMedia component="img" image={pain} />
            </CardActionArea>
          </Card>
        </li>
        <li className={classes.listItem}>
          <Card className={classes.cardRoot}>
            <CardActionArea>
              <CardMedia component="img" image={thousand} />
            </CardActionArea>
          </Card>
        </li>
        <li className={classes.listItem}>
          <Card className={classes.cardRoot}>
            <CardActionArea>
              <CardMedia component="img" image={starboy} />
            </CardActionArea>
          </Card>
        </li>
        <li className={classes.listItem}>
          <Card className={classes.cardRoot}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="inherit"
                image={bohemainrhapsody}
              />
            </CardActionArea>
          </Card>
        </li>
      </ul>
    </>
  );
}
