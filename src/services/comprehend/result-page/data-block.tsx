/** @jsx jsx */
import React, { FunctionComponent } from "react";
import { css, jsx } from "@emotion/core";
import { TestProgressBar } from "./status-bar";

type ComprehendDataBlockProps = {
	term: string;
	type?: string;
	roundedScore?: number;
	trueScore?: number;
};

export const ComprehendDataBlock: FunctionComponent<ComprehendDataBlockProps> = ({
	term,
	type,
	roundedScore,
	trueScore,
}) => {
	const typeHtml = type ? (
		<h3 css={DataBlockType}>Type: {type}</h3>
	) : (
		undefined
	);
	const roundedScoreHtml = roundedScore ? (
		<h3 css={DataBlockRoundedScore}>Rounded Score: {roundedScore}</h3>
	) : (
		undefined
	);
	const trueScoreHtml = trueScore ? (
		<h3 css={DataBlockTrueScore}>True Score: {trueScore}</h3>
	) : (
		undefined
	);
	return (
		<div css={DataBlockContainer}>
			<h3 css={DataBlockTerm}>Term: {term}</h3>
			{typeHtml}
			{roundedScoreHtml}
			{trueScoreHtml}
			<div css={DataBlockResultsBar}>
				<TestProgressBar percent={15}></TestProgressBar>
			</div>
		</div>
	);
};

const DataBlockContainer = css`
	 {
		display: grid;
		grid-template-areas:
			"dataTerm 	dataType 	 roundedScore  trueScore"
			"resultsBar resultsBar resultsBar    resultsBar";
		border-style: solid;
		border-color: var(--results-border-line-color);
		border-radius: 1rem;
		padding: 0 1rem 0.5rem 1rem;
	}
`;

const DataBlockTerm = css`
	 {
		color: var(--results-border-term-color);
		margin-bottom: 0.5rem;
		grid-area: dataTerm;
	}
`;

const DataBlockType = css`
	 {
		color: var(--results-border-term-color);
		grid-area: dataType;
	}
`;

const DataBlockRoundedScore = css`
	 {
		grid-area: roundedScore;
	}
`;

const DataBlockTrueScore = css`
	 {
		grid-area: trueScore;
	}
`;

const DataBlockResultsBar = css`
	 {
		grid-area: resultsBar;
	}
`;
