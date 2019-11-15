/** @jsx jsx */
import React, { FunctionComponent } from "react";
import { css, jsx } from "@emotion/core";
import { useHistory } from "react-router-dom";

/* Button to return to the Grid (website landing page)
   Button should be hidden when on the Grid
*/

export const GridButton: FunctionComponent = () => {
	const history = useHistory();

	// On click, send to grid
	const handleButtonClick = () => {
		history.push("/");
	};

	return (
		<div css={ContainerStyle}>
			<div css={GridButtonStyle} onClick={handleButtonClick}>
				<h2 css={GridButtonTextStyle}>Return To Grid</h2>
			</div>
		</div>
	);
};

const ContainerStyle = (visible: string) => css`
	 {
		visible: ${visible};
	}
`;

const GridButtonStyle = () => css`
	 {
		width: 11em;
		height: 3em;

		cursor: pointer;
		border-radius: 3em;
		margin: 2em 0 0 7em;
		background: var(--dark-mode-btn-color);

		:hover {
			background: var(--grid-button-color);
			box-shadow: var(--grid-button-hover-shadow);
		}
	}
`;

const GridButtonTextStyle = css`
	 {
		text-align: center;
		margin: 0;
		padding-top: 0.5em;
	}
`;
