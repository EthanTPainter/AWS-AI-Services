/** @jsx jsx */
import React, { FunctionComponent } from "react";
import { css, jsx } from "@emotion/core";
import { useHistory } from "react-router-dom";

type ButtonProps = {
	readonly: boolean;
	text: string;
	languageCode: string;
};

/* Submit buttons for launching comprehend and comprehend medical */
export const Buttons: FunctionComponent<ButtonProps> = ({
	readonly,
	text,
	languageCode,
}) => {
	let history = useHistory();

	const handleClick = () => {
		if (text && readonly === false) {
			const resultState = {
				text,
				languageCode,
			};
			localStorage.setItem("comprehendText", text);
			localStorage.setItem("comprehendLanguageCode", languageCode);
			history.push("/comprehend/results");
		}
	};

	// Select specific button styles based on readonly prop
	let CompBtnStyle = null;
	let CompMedBtnStyle = null;

	if (readonly) {
		CompBtnStyle = ComprehendReadBtnStyle;
		CompMedBtnStyle = ComprehendReadMedBtnStyle;
	} else {
		CompBtnStyle = ComprehendBtnStyle;
		CompMedBtnStyle = ComprehendMedBtnStyle;
	}

	return (
		<div css={ContainerStyle}>
			<div css={CompBtnStyle} onClick={handleClick}>
				Comprehend
			</div>
			<div css={CompMedBtnStyle} onClick={handleClick}>
				Comprehend Medical
			</div>
		</div>
	);
};

const ContainerStyle = css`
	display: grid;
	grid-template-areas: ".  comp  compMed   .";

	margin: 5em;
`;

const ComprehendBtnStyle = css`
	grid-area: comp;
	justify-self: center;

	:hover {
		transform: scale(1.1);
		background: var(--comprehend-btn-hover-color);
	}

	cursor: pointer;
	font-size: 2em;
	padding: 0.5em;
	border-radius: 0.3em;
	background: var(--comprehend-btn-color);
`;

const ComprehendReadBtnStyle = css`
	grid-area: comp;
	justify-self: center;

	font-size: 2em;
	padding: 0.5em;
	border-radius: 0.3em;
	background: var(--comprehend-readonly-color);
`;

const ComprehendMedBtnStyle = css`
	grid-area: compMed;
	justify-self: center;

	:hover {
		transform: scale(1.1);
		background: var(--comprehend-med-btn-hover-color);
	}

	cursor: pointer;
	font-size: 2em;
	padding: 0.5em;
	border-radius: 0.3em;
	background: var(--comprehend-med-btn-color);
`;

const ComprehendReadMedBtnStyle = css`
	grid-area: compMed;
	justify-self: center;

	font-size: 2em;
	padding: 0.5em;
	border-radius: 0.3em;
	background: var(--comprehend-readonly-color);
`;
