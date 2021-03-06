/** @jsx jsx */
import React, { FunctionComponent } from "react";
import { css, jsx } from "@emotion/core";
import { useHistory } from "react-router-dom";

type GridButtonProps = {
	hide: string;
};

/* Button to return to the Grid (website landing page)
   Button should be hidden when on the Grid
*/
export const GridButton: FunctionComponent<GridButtonProps> = ({ hide }) => {
	const history = useHistory();

	// On click, send to grid
	const handleButtonClick = () => {
		history.push("/");
	};

	return (
		<div css={GridButtonStyle(hide)} onClick={handleButtonClick}>
			<h2 css={GridButtonTextStyle}>Return to Grid</h2>
		</div>
	);
};

const GridButtonStyle = (hidden: string) => css`
	 {
		visibility: ${hidden};
		width: 11em;
		height: 3em;

		cursor: pointer;
		border-radius: 1em;
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
