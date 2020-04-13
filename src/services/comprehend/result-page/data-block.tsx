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
	return (
		<div css={DataBlockContainer}>
			<h3 css={DataBlockTerm}>{term}</h3>
			<TestProgressBar percent={15}></TestProgressBar>
			{type ? <p>{type}</p> : undefined}
		</div>
	);
};

const DataBlockContainer = css`
	 {
		border-style: solid;
		border-radius: 0.3rem;
		padding: 0 1rem 0.5rem 1rem;
	}
`;

const DataBlockTerm = css`
	 {
		 margin-bottom: .5rem;
	}
`;
