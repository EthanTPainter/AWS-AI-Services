import React from "react";
import Select from "react-select";

import { LANGUAGES } from "../../enums";

import "../../css/services/comprehend/language-field.css";

// options for the select dropdown
const options = [
  { value: LANGUAGES.ENGLISH.abbr, label: LANGUAGES.ENGLISH.primary },
  { value: LANGUAGES.FRENCH.abbr, label: LANGUAGES.FRENCH.primary },
  { value: LANGUAGES.GERMAN.abbr, label: LANGUAGES.GERMAN.primary },
  { value: LANGUAGES.ITALIAN.abbr, label: LANGUAGES.ITALIAN.primary },
  { value: LANGUAGES.SPANISH.abbr, label: LANGUAGES.SPANISH.primary },
];

export const LanguageField = () => {
  return (
    <div id="language-field-container">
      <h2 id="language-field-title">Language</h2>
      <Select id="language-field-select" options={options} />
    </div>
  );
};
