import React from "react";

import "./service-header.css";

export const ServiceHeader = props => {
  return (
    <div>
      <h1 id="service-header">{props.title}</h1>
      <h2 id="service-subheader">
        Below are a list of Artifical Intelligence (AI) Services provided by
        AWS. 
        <br />
        Select a service below to start using it
      </h2>
    </div>
  );
};
