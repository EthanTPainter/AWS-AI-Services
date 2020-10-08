/** @jsx jsx */
import React, { FunctionComponent, useState, useEffect } from "react";
import { css, jsx } from "@emotion/core";

import { Header, ButtonBar } from "../../shared";
import { DESCRIPTIONS, TITLES } from "../../enums";

type TranslateProps = {};

export const Translate: FunctionComponent<TranslateProps> = ({}) => {
	const title = TITLES.TRANSLATE;
  const description = DESCRIPTIONS.TRANSLATE;
  
  // const [{ translatedText, isLoading, isError }] = getTranslatedText();

	return (
		<div>
			<ButtonBar
				hideReturnBtn={false}
				hideServiceBtn={true}
				serviceName="Translate"
			></ButtonBar>
			<Header title={title} mainDescription={description} />
			<div css={TextBoxes}>
				<textarea
					css={EnteredTextBox}
					placeholder="Sample text here"
				></textarea>
				<textarea readOnly css={TranslatedTextBox}></textarea>
			</div>
		</div>
	);
};

// Retrieve entities for the comprehend service
const getTranslatedText = (text: string, languageCode: string) => {
	const [entities, setEntities] = useState([]);

	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			// Request data for detecting entities
			setIsLoading(true);
			setIsError(false);

			try {
				// const entities = await detectEntities(text, languageCode);
				if (entities) {
					setEntities(entities);
				}
				throw Error(`Undefined response for detecting entities`);
			} catch (error) {
				console.log(`Error: ${error.message}`);
				setIsError(true);
			}

			setIsLoading(false);
		};

		fetchData();
	}, [text, languageCode]);

	return [{ entities, isLoading, isError }];
};

const TextBoxes = css`
	 {
		display: grid;
    grid-template-areas: "enteredText translatedText";
    
    margin: 2rem;
    height: 25rem;
	}
`;

const EnteredTextBox = css`
	 {
    grid-area: enteredText;
    margin-right: 2rem;
    font-size: 20px;
	}
`;

const TranslatedTextBox = css`
	 {
    display: translatedText;
    font-size: 20px;
	}
`;
