/** @jsx jsx */
import React, { FunctionComponent, useState } from "react";
import { css, jsx } from "@emotion/core";
import { DarkModeButton } from "./dark-button";
import { GridButton } from "./grid-button";

type ButtonBarProps = {
	hideReturnBtn: boolean;
};

/* A bar at the top of each service to show available buttons to select */
export const ButtonBar: FunctionComponent<ButtonBarProps> = ({
	hideReturnBtn,
}) => {
	const buttonVisibility = hideReturnBtn ? "hidden" : "visible";

	return (
		<div css={ContainerStyle}>
			<div css={DarkModeBtnStyle} >
				<DarkModeButton />
			</div>
			<div css={GridBtnStyle}>
				<GridButton hidden={buttonVisibility} />
			</div>
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

const DarkModeBtnStyle = css`{
	grid-area: darkBtn;
}`;

const GridBtnStyle = css`{
	grid-area: gridBtn;
}`;