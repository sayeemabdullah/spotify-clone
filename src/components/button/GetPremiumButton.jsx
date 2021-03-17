import React from "react";
import { Button } from "@material-ui/core";
import propTypes from "prop-types";

const GetPremiumButton = ({ color, children }) => {
  return (
    <Button variant="contained" color={color}>
      {children}
    </Button>
  );
};

GetPremiumButton.propTypes = {
  color: propTypes.string,
};

export default GetPremiumButton;
