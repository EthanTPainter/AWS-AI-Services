import React from "react";

import { ServiceTitle, ServiceDescription } from "../../shared";
import { DESCRIPTIONS, TITLES } from "../../enums";

export const ComprehendLandingPage = () => {
  const title = TITLES.COMPREHEND;
  const description = DESCRIPTIONS.COMPREHEND;

  return (
    <div>
      <ServiceTitle title={title} />
      <ServiceDescription description={description} />
    </div>
  );
};
