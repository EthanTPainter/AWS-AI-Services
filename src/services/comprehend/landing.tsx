import React from "react";

import { Header, DarkModeButton } from "../../shared";
import { DESCRIPTIONS, TITLES } from "../../enums";
import { LanguageField } from "./language-field";
import { TextField } from "./text-field";
import { Buttons } from "./buttons";

export const Comprehend = () => {
  const [text, setText] = React.useState("");
  const [language, setLanguage] = React.useState("");

  const title = TITLES.COMPREHEND;
  const description = DESCRIPTIONS.COMPREHEND_PART_ONE;
  const comprehendDetails = DESCRIPTIONS.COMPREHEND_PART_TWO;
  const comprehendMedicalDetails = DESCRIPTIONS.COMPREHEND_PART_THREE;

  /**
   * @Conditions
   * 1) When a language is selected, the text field box appears
   * 2) Buttons are not able to be clicked if language and text are not defined
   */
  return (
    <div>
      <DarkModeButton />
      <Header
        title={title}
        mainDescription={description}
        secondaryDescription={comprehendDetails}
        tertiaryDescription={comprehendMedicalDetails}
      />
      <LanguageField setLanguage={setLanguage} />
      {language.length !== 0 ? <TextField setText={setText} /> : null}
      {language.length !== 0 && text.length !== 0 ? (
        <Buttons text={text} readonly={false} />
      ) : (
        <Buttons text={text} readonly={true} />
      )}
    </div>
  );
};
