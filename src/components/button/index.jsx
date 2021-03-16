import React, { Component } from "react";
import "./styles.css";
import Button from "@material-ui/core/Button";

export class GetPremiumButton extends Component {
  state = {};
  render() {
    return (
      <>
        <Button className="getPremium" variant="contained">
          GET SPOTIFY PREMIUM
        </Button>
      </>
    );
  }
}

// export default Button;
