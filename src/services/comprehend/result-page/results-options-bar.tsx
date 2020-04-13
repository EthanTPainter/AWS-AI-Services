/** @jsx jsx */
import React, { FunctionComponent } from "react";
import { css, jsx } from "@emotion/core";

type PropsType = {
	currentlySelected: TabOptions;
};

export enum TabOptions {
	ENTITIES = "Entities",
	PHRASES = "Phrases",
	LANGUAGE = "Language",
	SENTIMENT = "Sentiment",
	SYNTAX = "Syntax",
}
let currentTab = TabOptions.ENTITIES;

export const ResultsOptionsBar: FunctionComponent<PropsType> = ({
	currentlySelected,
}) => {
	currentTab = currentlySelected;

	const handleOnClick = (selectedOption: TabOptions) => {
		// Reset previous tab style
		switch (currentTab) {
			case TabOptions.ENTITIES:
				entityStyle("--results-option-bar-dark-background");
				break;
			case TabOptions.PHRASES:
				phraseStyle("--results-option-bar-dark-background");
				break;
			case TabOptions.LANGUAGE:
				languageStyle("--results-option-bar-dark-background");
				break;
			case TabOptions.SENTIMENT:
				sentimentStyle("--results-option-bar-dark-background");
				break;
			case TabOptions.SYNTAX:
				syntaxStyle("--results-option-bar-dark-background");
				break;
		}

		// New tab style
		switch (selectedOption) {
			case TabOptions.ENTITIES:
				entityStyle("--results-option-bar-hover-color");
				break;
			case TabOptions.PHRASES:
				phraseStyle("--results-option-bar-hover-color");
				break;
			case TabOptions.LANGUAGE:
				languageStyle("--results-option-bar-hover-color");
				break;
			case TabOptions.SENTIMENT:
				sentimentStyle("--results-option-bar-hover-color");
				break;
			case TabOptions.SYNTAX:
				syntaxStyle("--results-option-bar-hover-color");
				break;
		}

		currentTab = selectedOption;
	};

	return (
		<div css={OptionsBarContainer}>
			<div
				css={
					currentTab === TabOptions.ENTITIES
						? entityStyle("--results-option-bar-hover-color")
						: entityStyle("--results-option-bar-dark-background")
				}
				onClick={() => handleOnClick(TabOptions.ENTITIES)}
			>
				{TabOptions.ENTITIES}
			</div>
			<div
				css={
					currentTab === TabOptions.PHRASES
						? phraseStyle("--results-option-bar-hover-color")
						: phraseStyle("--results-option-bar-dark-background")
				}
				onClick={() => handleOnClick(TabOptions.PHRASES)}
			>
				{TabOptions.PHRASES}
			</div>
			<div
				css={
					currentTab === TabOptions.LANGUAGE
						? languageStyle("--results-option-bar-hover-color")
						: languageStyle("--results-option-bar-dark-background")
				}
				onClick={() => handleOnClick(TabOptions.LANGUAGE)}
			>
				{TabOptions.LANGUAGE}
			</div>
			<div
				css={
					currentTab === TabOptions.SENTIMENT
						? sentimentStyle("--results-option-bar-hover-color")
						: sentimentStyle("--results-option-bar-dark-background")
				}
				onClick={() => handleOnClick(TabOptions.SENTIMENT)}
			>
				{TabOptions.SENTIMENT}
			</div>
			<div
				css={
					currentTab === TabOptions.SYNTAX
						? syntaxStyle("--results-option-bar-hover-color")
						: syntaxStyle("--results-option-bar-dark-background")
				}
				onClick={() => handleOnClick(TabOptions.SYNTAX)}
			>
				{TabOptions.SYNTAX}
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

const entityStyle = (backgroundColorVar: string) => css`
	 {
		border-style: hidden hidden solid hidden;
		border-radius: 2rem;
		margin: 0 2rem;
		padding: 0 3rem;
		font-size: 2.75rem;
		background: var(${backgroundColorVar});

		:hover {
			border-radius: 2rem;
			background: var(--results-option-bar-hover-color);
			box-shadow: var(--results-option-bar-hover-shadow);
		}
	}
`;
const phraseStyle = (backgroundColorVar: string) => css`
	 {
		border-style: hidden hidden solid hidden;
		border-radius: 2rem;
		margin: 0 2rem;
		padding: 0 3rem;
		font-size: 2.75rem;
		background: var(${backgroundColorVar});

		:hover {
			border-radius: 2rem;
			background: var(--results-option-bar-hover-color);
			box-shadow: var(--results-option-bar-hover-shadow);
		}
	}
`;
const languageStyle = (backgroundColorVar: string) => css`
	 {
		border-style: hidden hidden solid hidden;
		border-radius: 2rem;
		margin: 0 2rem;
		padding: 0 3rem;
		font-size: 2.75rem;
		background: var(${backgroundColorVar});

		:hover {
			border-radius: 2rem;
			background: var(--results-option-bar-hover-color);
			box-shadow: var(--results-option-bar-hover-shadow);
		}
	}
`;
const sentimentStyle = (backgroundColorVar: string) => css`
	 {
		border-style: hidden hidden solid hidden;
		border-radius: 2rem;
		margin: 0 2rem;
		padding: 0 3rem;
		font-size: 2.75rem;
		background: var(${backgroundColorVar});

		:hover {
			border-radius: 2rem;
			background: var(--results-option-bar-hover-color);
			box-shadow: var(--results-option-bar-hover-shadow);
		}
	}
`;
const syntaxStyle = (backgroundColorVar: string) => css`
	 {
		border-style: hidden hidden solid hidden;
		border-radius: 2rem;
		margin: 0 2rem;
		padding: 0 3rem;
		font-size: 2.75rem;
		background: var(${backgroundColorVar});

		:hover {
			border-radius: 2rem;
			background: var(--results-option-bar-hover-color);
			box-shadow: var(--results-option-bar-hover-shadow);
		}
	}
`;
