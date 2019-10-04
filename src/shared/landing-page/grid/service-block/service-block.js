import React from "react";
import { hot } from "react-hot-loader";

import "./service-block.css";
import "../service-grid.css";

class ServiceBlock extends React.Component {
  render() {
    return (
      <div class="service-block">
        <h1>Service: {this.props.name}</h1>
        <h4>Description: {this.props.description}</h4>
      </div>
    );
  }
}

export default hot(module)(ServiceBlock);
