/** @jsx jsx */
import React, { FunctionComponent } from "react";
import { css, jsx } from "@emotion/core";

type StatusBarProps = {
	percent: number;
};

const getColor = (percent: number) => {
	console.log(`Percent: ${percent}`);
	if (percent <= 15) {
		return "#f00";
	} else if (percent > 15 && percent < 30) {
	} else if (percent === 30) {
		return "#f90";
	} else if (percent > 30 && percent < 45) {
	} else if (percent === 45) {
		return "#ff0";
	} else if (percent > 45 && percent < 60) {
	} else if (percent === 60) {
	} else if (percent > 60 && percent < 85) {
	} else {
		return "#92ff00";
	}
};

export const TestProgressBar: FunctionComponent<StatusBarProps> = ({
	percent,
}) => {
	const color = getColor(percent);
	console.log(`COLOR: ${color}`);

	return (
		<div>
			<div css={ProgressBarStyle}>
				<div
					css={css`
						width: ${percent}%;
						background-color: ${color};
						border-radius: 20em;
					`}
				></div>
			</div>
		</div>
	);
};

const ProgressBarStyle = css`
	background-color: lightgrey;
	height: .5rem;
	border-radius: 20em;
`;
