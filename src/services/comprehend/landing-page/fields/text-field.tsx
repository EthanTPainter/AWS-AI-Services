/** @jsx jsx */
import React, { FunctionComponent, useState } from "react";
import { css, jsx } from "@emotion/core";

type TextFieldProps = {
	setText: React.Dispatch<React.SetStateAction<string>>;
	hidden: string;
};

export const TextField: FunctionComponent<TextFieldProps> = ({
	setText,
	hidden,
}) => {
	// Window Event
	const handleChange = (input: any) => {
		setText(input.target.value);
	};

	const mainPlaceholder =
		"Enter general or medical text to comprehend relationships. \n\n" +
		"Comprehend Example: \nJeff Bezos is the CEO of Amazon, Inc.\n\n" +
		"Comprehend Medical Example: \nPt is 40yo mother, highschool teacher \nHPI: Sleeping trouble on present dosage\n" +
		"Lungs : clear \nHeart : Regular rhythm ";

	return (
		<div css={MainContainerStyle(hidden)}>
			<h2 css={TitleStyle}>Enter Text</h2>
			<textarea
				css={TextFieldStyle}
				placeholder={mainPlaceholder}
				onChange={handleChange}
			></textarea>
		</div>
	);
};

const MainContainerStyle = (hidden: string) => css`
	visibility: ${hidden};
	display: grid;
	grid-template-areas:
		".  fieldTitle   fieldTitle   ."
		".  fieldText    fieldText    .";
`;

const TextFieldStyle = css`
	grid-area: fieldText;
	justify-content: stretch;

	:focus {
		border-color: var(--comprehend-txt-field-border);
		box-shadow: 0 0 0 1px var(--comprehend-txt-field-border);
	}

	border-radius: 4px;
	font-size: 1.5em;
	margin: 0 0 0 0.4em;
	padding: 0.5em;
	height: 12em;
`;

const TitleStyle = css`
	grid-area: fieldTitle;
	justify-self: center;
	color: var(--text-color);
	font-size: 2em;
`;
