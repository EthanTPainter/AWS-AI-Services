import React from "react";
import { LANGUAGES } from "../../enums";

export const LanguageField = () => {
  return (
    <div id="language-field-container">
      <select id="language-field-select">
        <option id="language-field-option" value={LANGUAGES.ENGLISH.abbr}>
          {LANGUAGES.ENGLISH.primary}{" "}
        </option>
        <option id="language-field-option" value={LANGUAGES.FRENCH.abbr}>
          {LANGUAGES.FRENCH.primary}{" "}
        </option>
        <option id="language-field-option" value={LANGUAGES.GERMAN.abbr}>
          {LANGUAGES.GERMAN.primary}{" "}
        </option>
        <option id="language-field-option" value={LANGUAGES.ITALIAN.abbr}>
          {LANGUAGES.ITALIAN.primary}{" "}
        </option>
        <option id="language-field-option" value={LANGUAGES.PORTUGUESE.abbr}>
          {LANGUAGES.PORTUGUESE.primary}{" "}
        </option>
        <option id="language-field-option" value={LANGUAGES.Spanish.abbr}>
          {LANGUAGES.Spanish.primary}
        </option>
      </select>
    </div>
  );
};
