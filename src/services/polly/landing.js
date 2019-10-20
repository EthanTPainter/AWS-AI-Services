import React from "react";

import { Header } from "../../shared";
import { DESCRIPTIONS, TITLES } from "../../enums";

export const Polly = () => {
  const title = TITLES.POLLY;
  const description = DESCRIPTIONS.POLLY;

  return (
    <div>
      <Header title={title} mainDescription={description} />
    </div>
  );
};