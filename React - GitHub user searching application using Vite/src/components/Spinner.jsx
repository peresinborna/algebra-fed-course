import React from "react";
import loader from "../assets/loader.gif";

class Spinner extends React.Component {
  render() {
    return <img src={loader} alt="Učitavam se..." className="spinner-gif" />;
  }
}

export default Spinner;
