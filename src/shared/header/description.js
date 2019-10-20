import React from "react";

import "../../css/shared/header.css";

export const Description = props => {
  const mainDescription = props.description;
  const secondDescription = props.secondDescription;
  const thirdDescription = props.thirdDescription;

  if (thirdDescription) {
    return (
      <div id="subheader">
        <p>{mainDescription}</p>
        <p>{secondDescription}</p>
        <p>{thirdDescription}</p>
      </div>
    );
  } else if (secondDescription) {
    return (
      <div id="subheader">
        <p>{mainDescription}</p>
        <p>{secondDescription}</p>
      </div>
    );
  } else {
    return (
      <div>
        <p id="subheader">{mainDescription}</p>
      </div>
    );
  }
};
