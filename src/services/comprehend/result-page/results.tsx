/** @jsx jsx */
import React, { useState, useEffect } from "react";
import { css, jsx } from "@emotion/core";
import { ButtonBar, Header } from "../../../shared";
import { detectEntities } from "../../../external/aws";
import { ComprehendDataBlock } from "./data-block";
import { ComprehendPreview } from "./preview";
import { ResultsOptionsBar } from "./results-options-bar";

export const ComprehendResults = () => {
	// Retrieve text and language code for detecting entities
	const text = localStorage.getItem("comprehendText") || "";
	const languageCode = localStorage.getItem("comprehendLanguageCode") || "en";

	/*
	const [{ entities, isLoading, isError }] = getComprehendEntities(
		text,
		languageCode
	);
	*/

	return (
		<div>
			<ButtonBar
				hideReturnBtn={false}
				hideServiceBtn={false}
				serviceName="Comprehend"
			/>
			<Header title="Results" />
			<ResultsOptionsBar currentlySelected="entities" />
		</div>
	);
	/*
	return (
		<div>
			<ButtonBar
				hideReturnBtn={false}
				hideServiceBtn={false}
				serviceName="Comprehend"
			/>
			<Header title="Results" mainDescription="Let's see the results" />

			{isError && <div>Uh oh, looks like something went wrong...</div>}

			{isLoading ? (
				<div>Loading results...</div>
			) : (
				<ul>
					{entities.map((entity) => (
						<ul>{entity}</ul>
					))}
				</ul>
			)}
		</div>
	);
	*/
};

// Retrieve entities for the comprehend service
const getComprehendEntities = (text: string, languageCode: string) => {
	const [entities, setEntities] = useState([] as string[]);

	const [isLoading, setIsLoading] = useState(false);
	const [isError, setIsError] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			// Request data for detecting entities
			setIsLoading(true);
			setIsError(false);

			try {
				const entities = await detectEntities(text, languageCode);
				if (entities) {
					const response = entities.map((entity) => {
						const answer = `Term: ${entity.Text}, Score: ${entity.Score}\n`;
						return answer;
					});
					setEntities(response);
				}
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
