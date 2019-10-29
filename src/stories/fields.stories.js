import React from "react";
import { LanguageField } from "../services/comprehend/language-field";
import { TextField } from "../services/comprehend/text-field";

export default { title: "Comprehend Components" };

export const languageField = () => <LanguageField />;

export const textField = () => <TextField />