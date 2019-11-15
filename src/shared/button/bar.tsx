/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";
import { DarkModeButton } from "./dark-button";
import { GridButton } from "./grid-button";

/* A bar at the top of each service to show available buttons to select */
export const ButtonBar = () => {

	return (
		<div css={ContainerStyle}>
			<DarkModeButton css={DarkModeButtonStyle} />
			<GridButton css={GridButtonStyle} />
		</div>
	);
};

const ContainerStyle = css`
	 {
		display: grid;
		grid-template-areas: "darkBtn gridBtn";
		grid-template-columns: 1fr 1fr 5fr;
	}
`;

const DarkModeButtonStyle = css`
	 {
		grid-area: darkBtn;
	}
`;

const GridButtonStyle = css`
	 {
		grid-area: gridBtn;
	}
`;
