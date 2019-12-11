/** @jsx jsx */
import React, { FunctionComponent } from "react";
import { css, jsx } from "@emotion/core";

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
			<h3>{term}</h3>
			{type ? <p>Type: {type}</p> : undefined}
		</div>
	);
};

const DataBlockContainer = css`
	 {
		background: #ffffff;
		border-radius: 2em;
	}
`;
