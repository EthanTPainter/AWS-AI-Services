import React from "react";

import { Header } from "../../shared";
import { DESCRIPTIONS, TITLES } from "../../enums";

export const Personalize = () => {
  const title = TITLES.PERSONALIZE;
  const description = DESCRIPTIONS.PERSONALIZE;

  return (
    <div>
      <Header title={title} mainDescription={description} />
    </div>
  );
};