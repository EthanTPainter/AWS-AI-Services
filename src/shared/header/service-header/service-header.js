import React from "react";

import "./service-header.css";

const ServiceHeader = props => {
  return (
    <div>
      <h1 id="service-header">{props.title}</h1>
      <h3 id="service-subheader">
        Below are a list of Artifical Intelligence (AI) Services provided by
        AWS. Select one to view a detailed overview of how the service operates.
        While a service is selected, click "Use" to launch the service, or click "Preview"
        to view a video of how to use the service.
      </h3>
    </div>
  );
};

export default ServiceHeader;
