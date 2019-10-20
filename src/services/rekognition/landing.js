import React from "react";

import { Header } from "../../shared";
import { DESCRIPTIONS, TITLES } from "../../enums";

export const Rekognition = () => {
  const title = TITLES.REKOGNITION;
  const description = DESCRIPTIONS.REKOGNITION_PART_ONE;
  const imageDescription = DESCRIPTIONS.REKOGNITION_PART_TWO;
  const videoDescription = DESCRIPTIONS.REKOGNITION_PART_THREE;

  return (
    <div>
      <Header
        title={title}
        mainDescription={description}
        secondaryDescription={imageDescription}
        tertiaryDescription={videoDescription}
      />
    </div>
  );
};
