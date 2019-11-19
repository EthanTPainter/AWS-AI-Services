import React, { FunctionComponent } from "react";

import { Header } from "../../../shared";
import { DESCRIPTIONS, TITLES } from "../../../enums";
import { LanguageField } from "./fields/language-field";
import { TextField } from "./fields/text-field";
import { Buttons } from "./buttons/submit";
import { ButtonBar } from "../../../shared/button";

export const ComprehendLanding: FunctionComponent = () => {
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
			<ButtonBar hideReturnBtn={false} hideServiceBtn={true} />
			<Header
				title={title}
				mainDescription={description}
				secondaryDescription={comprehendDetails}
				tertiaryDescription={comprehendMedicalDetails}
			/>
			<LanguageField setLanguage={setLanguage} />

			{language.length !== 0 ? (
				<TextField setText={setText} hidden="visible" />
			) : (
				<TextField setText={setText} hidden="hidden" />
			)}

			{language.length !== 0 && text.length !== 0 ? (
				<Buttons text={text} languageCode={language} readonly={false} />
			) : (
				<Buttons text={text} languageCode={language} readonly={true} />
			)}
		</div>
	);
};
