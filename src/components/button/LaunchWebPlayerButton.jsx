import React from "react";
import { Button, withStyles } from "@material-ui/core";
import propTypes from "prop-types";

const styles = () => ({
  default: {
    background: "white",
    color: "#616467",
    borderRadius: "360px",
    border: "2px solid #616467",
    height: "3em",
    width: "18em",
    marginBottom: "60px",
    textTransform: "none",
    fontSize: "16px",
    fontWeight: "bold",
    display: "inline-block",
    "&:hover": {
      background: "#616467",
      color: "white",
    },
  },
});

const LaunchWebPlayerButton = ({ children, color, classes }) => {
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

LaunchWebPlayerButton.propTypes = {
  color: propTypes.string,
};

export default withStyles(styles)(LaunchWebPlayerButton);
