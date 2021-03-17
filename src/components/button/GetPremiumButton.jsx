import React from "react";
import { Button, withStyles } from "@material-ui/core";
import propTypes from "prop-types";

const styles = () => ({
  default: {
    borderRadius: "360px",
    height: "4em",
    width: "20em",
    margin: "2em auto",
    textTransform: "none",
    background: "#1db955",
    color: "white",
    fontSize: "16px",
    fontWeight: "bold",
    display: "inline-block",
    "&:hover": {
      background: "#1ed760",
    },
  },
});

const GetPremiumButton = ({ color, children, classes }) => {
  return (
    <Button
      variant="contained"
      color={color}
      className={classes.default}
      disableElevation
    >
      {children}
    </Button>
  );
};

GetPremiumButton.propTypes = {
  color: propTypes.string,
};

export default withStyles(styles)(GetPremiumButton);
