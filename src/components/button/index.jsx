import React, { Component } from "react";
import "./styles.css";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

// const StyledButton = withStyles({
//   root: {
//     background: "#003",
//     borderRadius: "45px",
//     border: 0,
//     color: "white",
//     height: 48,
//     padding: "0 30px",
//     boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
//   },
//   label: {
//     textTransform: "capitalize",
//   },
// })(Button);

class GetPremiumButton extends Component {
  render() {
    return <Button classes={{ root: "Button" }}>GET SPOTIFY PREMIUM</Button>;
  }
}

export default GetPremiumButton;
