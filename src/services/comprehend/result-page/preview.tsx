/** @jsx jsx */
import React, { FunctionComponent } from "react";
import { css, jsx } from "@emotion/core";

import { LANGUAGE_PRIMARIES, LANGUAGE_ABBRS } from "../../../enums";

type PreviewProps = {
	text: string;
	languageCode: string;
};

export const ComprehendPreview: FunctionComponent<PreviewProps> = ({
	text,
	languageCode,
}) => {
	// Convert language abbreviation to primary language string
	const convertToLanguage = (languageCode: string) => {
		switch (languageCode) {
			case LANGUAGE_ABBRS.ENGLISH:
				return LANGUAGE_PRIMARIES.ENGLISH;
			case LANGUAGE_ABBRS.FRENCH:
				return LANGUAGE_PRIMARIES.FRENCH;
			case LANGUAGE_ABBRS.GERMAN:
				return LANGUAGE_PRIMARIES.GERMAN;
			case LANGUAGE_ABBRS.ITALIAN:
				return LANGUAGE_PRIMARIES.ITALIAN;
			case LANGUAGE_ABBRS.PORTUGUESE:
				return LANGUAGE_PRIMARIES.PORTUGUESE;
			case LANGUAGE_ABBRS.SPANISH:
				return LANGUAGE_PRIMARIES.SPANISH;
			default:
				return "No Primary Language";
		}
	};

	return (
		<div css={PreviewGridStyle}>
			<div css={PreviewLanguageStyle}>Language:</div>
			<div css={EnteredLanguageStyle}>{convertToLanguage(languageCode)}</div>
			<div css={PreviewTextStyle}>Text:</div>
			<div css={EnteredTextStyle}>{text}</div>
		</div>
	);
};

const PreviewGridStyle = css`
	 {
		display: grid;
		grid-column-gap: 2rem;
		grid-row-gap: 2rem;
		grid-template-areas:
			"previewLang 	enteredLang"
			"previewText enteredText";
	}
`;

const PreviewTextStyle = css`
	 {
		grid-area: previewText;
		justify-self: right;

		margin-left: 4rem;
		font-size: 1.5rem;
	}
`;

const PreviewLanguageStyle = css`
	 {
		grid-area: previewLang;
		justify-self: right;

		margin-left: 4rem;
		font-size: 1.5rem;
	}
`;

const EnteredTextStyle = css`
	 {
		grid-area: enteredText;
		justify-self: left;
		font-size: 1.5rem;
	}
`;

const EnteredLanguageStyle = css`
	 {
		grid-area: enteredLang;
		justify-self: left;
		font-size: 1.5rem;
	}
`;
