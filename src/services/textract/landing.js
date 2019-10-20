import React from "react";

import { Header } from "../../shared";
import { DESCRIPTIONS, TITLES } from "../../enums";

export const Textract = () => {
  const title = TITLES.TEXTRACT;
  const description = DESCRIPTIONS.TEXTRACT;

  return (
    <div>
      <Header title={title} mainDescription={description} />
    </div>
  );
};