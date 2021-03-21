import React from "react";
import Grid from "@material-ui/core/Grid";
import MusicCard from "../card/MusicCard";
import awakeep from "../card/musicAlbumCover/awakeep.jpg";
import jayball from "../card/musicAlbumCover/jayball.jpg";
import pain from "../card/musicAlbumCover/pain.jpg";
import thousand from "../card/musicAlbumCover/1000.jpg";
import starboy from "../card/musicAlbumCover/starboy.jpg";
import bohemainrhapsody from "../card/musicAlbumCover/bohemainrhapsody.jpg";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  gridContainer: {
    // paddingTop: "5rem",
    // paddingBottom: "10rem",
  },
});

export default function MusicCardGrid() {
  const classes = useStyles();
  return (
    <>
      <Grid
        container
        className={classes.gridContainer}
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item>
          <MusicCard imageLink={awakeep}></MusicCard>
        </Grid>
        <Grid item>
          <MusicCard imageLink={jayball}></MusicCard>
        </Grid>
        <Grid item>
          <MusicCard imageLink={pain}></MusicCard>
        </Grid>
      </Grid>
      <Grid
        container
        className={classes.gridContainer}
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item>
          <MusicCard imageLink={thousand}></MusicCard>
        </Grid>
        <Grid item>
          <MusicCard imageLink={starboy}></MusicCard>
        </Grid>
        <Grid item>
          <MusicCard imageLink={bohemainrhapsody}></MusicCard>
        </Grid>
      </Grid>
    </>
  );
}
