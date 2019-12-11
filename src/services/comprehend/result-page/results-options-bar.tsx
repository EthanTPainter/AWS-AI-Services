/** @jsx jsx */
import React, { FunctionComponent } from "react";
import { css, jsx } from "@emotion/core";

const resultOptions = {
	entities: "",
	phrases: "",
	language: "",
	sentiment: "",
	syntax: "",
};

type PropsType = {
	currentlySelected: string;
};

export const ResultsOptionsBar: FunctionComponent<PropsType> = ({
	currentlySelected,
}) => {
	const handleOnClick = () => {};

	return (
		<div css={OptionsBarContainer}>
			<div css={childStyle} onClick={handleOnClick}>
				Entities
			</div>
			<div css={childStyle} onClick={handleOnClick}>
				Phrases
			</div>
			<div css={childStyle} onClick={handleOnClick}>
				Language
			</div>
			<div css={childStyle} onClick={handleOnClick}>
				Sentiment
			</div>
			<div css={childStyle} onClick={handleOnClick}>
				Syntax
			</div>
		</div>
	);
};

const OptionsBarContainer = css`
	 {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;

		margin: 2rem 0;
	}
`;

const childStyle = css`
	 {
		border-style: hidden hidden solid hidden;
		border-radius: 1rem;

		margin: 0 2rem;
		padding: 0 3rem;

		font-size: 2.75rem;

		.selected {

		}

		:hover {
			border-radius: 2rem;
			background: var(--results-option-bar-hover-color);
			box-shadow: var(--results-option-bar-hover-shadow);
		}
	}
`;

const selectedChildStyle = css`{

}`;
