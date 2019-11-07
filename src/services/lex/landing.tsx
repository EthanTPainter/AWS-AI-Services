import React from "react";

import { Header } from "../../shared";
import { DESCRIPTIONS, TITLES } from "../../enums";

export const Lex = () => {
  const title = TITLES.LEX;
  const description = DESCRIPTIONS.LEX;

  return (
    <div>
      <Header title={title} mainDescription={description} />
    </div>
  );
};
