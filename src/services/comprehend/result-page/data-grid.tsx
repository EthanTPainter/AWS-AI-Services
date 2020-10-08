/** @jsx jsx */
import React, { FunctionComponent } from "react";
import { css, jsx } from "@emotion/core";
import { Comprehend } from "aws-sdk";
import { ComprehendDataBlock } from "./data-block";

type ComprehendDataGridProps = {
	results: Comprehend.Entity[];
};

export const ComprehendDataGrid: FunctionComponent<ComprehendDataGridProps> = ({
	results,
}) => {
	const dataBlocks = results.map((result) => {
		if (!result.Text) {
			return;
		}
		console.log(`Result: ${JSON.stringify(result)}`);
		return (
			<ComprehendDataBlock
				term={result.Text}
				type={result.Type}
				roundedScore={result.Score}
			/>
		);
	});

	return <div>{dataBlocks}</div>;
};
