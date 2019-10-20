import React from "react";

import { Header } from "../../shared";
import { DESCRIPTIONS, TITLES } from "../../enums";

export const Translate = () => {
  const title = TITLES.TRANSLATE;
  const description = DESCRIPTIONS.TRANSLATE;

  return (
    <div>
      <Header title={title} mainDescription={description} />
    </div>
  );
};