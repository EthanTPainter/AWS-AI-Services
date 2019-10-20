import React from "react";

import { Header } from "../../shared";
import { DESCRIPTIONS, TITLES } from "../../enums";

export const Forecast = () => {
  const title = TITLES.FORECAST;
  const description = DESCRIPTIONS.FORECAST;

  return (
    <div>
      <Header title={title} mainDescription={description} />
    </div>
  );
};
