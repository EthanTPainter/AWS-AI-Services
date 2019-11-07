import React, { FunctionComponent } from "react";

import "../../css/shared/header.css";

type DescriptionProps = {
  description: string;
  secondDescription?: string;
  thirdDescription?: string;
};

export const Description: FunctionComponent<DescriptionProps> = ({
  description,
  secondDescription,
  thirdDescription,
}) => {
  if (thirdDescription) {
    return (
      <div id="subheader">
        <p>{description}</p>
        <p>{secondDescription}</p>
        <p>{thirdDescription}</p>
      </div>
    );
  } else if (secondDescription) {
    return (
      <div id="subheader">
        <p>{description}</p>
        <p>{secondDescription}</p>
      </div>
    );
  } else {
    return (
      <div>
        <p id="subheader">{description}</p>
      </div>
    );
  }
};
