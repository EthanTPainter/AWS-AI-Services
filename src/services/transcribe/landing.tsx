import React from "react";

import { Header } from "../../shared";
import { DESCRIPTIONS, TITLES } from "../../enums";

export const Transcribe = () => {
  const title = TITLES.TRANSCRIBE;
  const description = DESCRIPTIONS.TRANSCRIBE;

  return (
    <div>
      <Header title={title} mainDescription={description} />
    </div>
  );
};