import React from "react";
import { hot } from "react-hot-loader";

import "./service-header.css";

class ServiceHeader extends React.Component {

  render() {
    return  <div>
              <h1 id="service-header">{ this.props.title }</h1>
              <h3 id="service-subheader">{ this.props.subheader }</h3>
            </div>
  }
}

export default hot(module)(ServiceHeader);