import React from "react";

import { Header } from "../../shared";
import { DESCRIPTIONS, TITLES } from "../../enums";

export const Comprehend = () => {
  const title = TITLES.COMPREHEND;
  const description = DESCRIPTIONS.COMPREHEND_PART_ONE;
  const comprehendDetails = DESCRIPTIONS.COMPREHEND_PART_TWO;
  const comprehendMedicalDetails = DESCRIPTIONS.COMPREHEND_PART_THREE;

  return (
    <div>
      <Header
        title={title}
        mainDescription={description}
        secondaryDescription={comprehendDetails}
        tertiaryDescription={comprehendMedicalDetails}
      />
    </div>
  );
};
