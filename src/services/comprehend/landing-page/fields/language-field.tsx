/** @jsx jsx */
import React, { FunctionComponent } from "react";
import Select from "react-select";
import { css, jsx } from "@emotion/core";

import { LANGUAGE_PRIMARIES, LANGUAGE_ABBRS } from "../../../../enums";

// options for the select dropdown
const options = [
  { value: LANGUAGE_ABBRS.ENGLISH, label: LANGUAGE_PRIMARIES.ENGLISH },
  { value: LANGUAGE_ABBRS.FRENCH, label: LANGUAGE_PRIMARIES.FRENCH },
  { value: LANGUAGE_ABBRS.GERMAN, label: LANGUAGE_PRIMARIES.GERMAN },
  { value: LANGUAGE_ABBRS.ITALIAN, label: LANGUAGE_PRIMARIES.ITALIAN },
  { value: LANGUAGE_ABBRS.SPANISH, label: LANGUAGE_PRIMARIES.SPANISH },
];

type LanguageFieldProps = {
  setLanguage: React.Dispatch<React.SetStateAction<string>>;
};

export const LanguageField: FunctionComponent<LanguageFieldProps> = ({
  setLanguage,
}) => {
  // Window event
  const changeHandler = (input: any) => {
    setLanguage(input.value);
  };

  return (
    <div css={ContainerStyle}>
      <h2 css={TitleStyle}>Select a Language</h2>
      <Select css={SelectStyle} options={options} onChange={changeHandler} />
    </div>
  );
};

/* Grid for Language Field */
const ContainerStyle = css`
  display: grid;
  grid-template-areas:
    ".  title   title   ."
    ".  select  select  .";
  margin: 3em 8em;
  padding: 1em 0em 3em 0em;
`;

/* Language Field Title */
const TitleStyle = css`
  grid-area: title;
  justify-self: center;
  color: var(--text-color);
  font-size: 2em;
`;

/* Language Field Select */
const SelectStyle = css`
  grid-area: select;
`;
