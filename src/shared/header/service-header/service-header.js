import React from "react";
import { hot } from "react-hot-loader";

import "./service-header.css";

const ServiceHeader = props => {
  return (
    <div>
      <h1 id="service-header">{props.title}</h1>
      <h3 id="service-subheader">{props.subheader}</h3>
    </div>
  );
};

export default hot(module)(ServiceHeader);
