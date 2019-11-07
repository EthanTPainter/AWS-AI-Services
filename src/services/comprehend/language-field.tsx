import React, { FunctionComponent } from "react";
import Select from "react-select";

import { LANGUAGE_PRIMARIES, LANGUAGE_ABBRS } from "../../enums";

import "../../css/services/comprehend/language-field.css";

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
    <div id="language-field-container">
      <h2 id="language-field-title">Select a Language</h2>
      <Select
        id="language-field-select"
        options={options}
        onChange={changeHandler}
      />
    </div>
  );
};
