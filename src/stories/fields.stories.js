import React from "react";
import { LanguageField } from "../services/comprehend/language-field";
import { TextField } from "../services/comprehend/text-field";
import { TestProgressBar } from "../services/comprehend/status-bar";

export default { title: "Comprehend Components" };

export const languageField = () => <LanguageField />;

export const textField = () => <TextField />;

export const myProgressBar = () => <TestProgressBar />;
