import React from "react";
import { makeStyles } from "@material-ui/styles";
import logo from "./Spotify_Logo_NavBar.png";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";

const styles = makeStyles({
  default: {
    backgroundColor: "black",
    padding: "10rem",
    position: "relative",
  },
  contents: {
    marginLeft: "auto",
    marginRight: "auto",
    width: "80rem",
  },
  table: {
    marginLeft: "20rem",
    marginTop: "-5rem",
    color: "white",
    fontSize: "0.9rem",
    width: "40%",
    padding: "0.5rem",
    borderSpacing: "1.4rem",
    fontWeight: "bold",
  },
  tableHead: {
    color: "#808385",
    fontWeight: "bold",
    fontSize: "0.8rem",
  },
  tableBody: {
    "&:hover": {
      color: "#2FB150",
    },
  },
  image: {
    height: "3rem",
  },
  socialNetworks: {
    color: "white",
    position: "absolute",
    right: "15rem",
    bottom: "20rem",
  },
  socialNetwork: {
    marginLeft: "1rem",
    "&:hover": {
      color: "#2FB150",
    },
  },
});

export default function Footer() {
  const classes = styles();
  return (
    <>
      <div className={classes.default}>
        <div className={classes.contents}>
          <img src={logo} className={classes.image}></img>
          <table className={classes.table}>
            <tr className={classes.tableHead}>
              <td>COMPANY</td>
              <td>COMMUNITIES</td>
              <td>USEFUL LINKS</td>
            </tr>
            <tr>
              <td className={classes.tableBody}>About</td>
              <td className={classes.tableBody}>For Artists</td>
              <td className={classes.tableBody}>Support</td>
            </tr>
            <tr>
              <td className={classes.tableBody}>Jobs</td>
              <td className={classes.tableBody}>Developers</td>
              <td className={classes.tableBody}>Web Player</td>
            </tr>
            <tr>
              <td className={classes.tableBody}>For the Record</td>
              <td className={classes.tableBody}>Advertising</td>
              <td className={classes.tableBody}>Free Mobile App</td>
            </tr>
            <tr className={classes.tableBody}>
              <td></td>
              <td>Investors</td>
              <td></td>
            </tr>
            <tr className={classes.tableBody}>
              <td></td>
              <td>Vendors</td>
              <td></td>
            </tr>
          </table>
          <div className={classes.socialNetworks}>
            <InstagramIcon className={classes.socialNetwork}></InstagramIcon>
            <TwitterIcon className={classes.socialNetwork}></TwitterIcon>
            <FacebookIcon className={classes.socialNetwork}></FacebookIcon>
          </div>
        </div>
      </div>
    </>
  );
}
