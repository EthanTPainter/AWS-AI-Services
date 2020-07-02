/** @jsx jsx */
import React, { FunctionComponent } from "react";
import { css, jsx } from "@emotion/core";
import { useHistory } from "react-router-dom";

type ServiceButtonProps = {
	serviceName: string;
	hide: string;
};

/**
 * Button to return to the landing page of the current service used
 * Button should be available when not on the landing service page or grid page
 */
export const ServiceButton: FunctionComponent<ServiceButtonProps> = ({
	serviceName,
	hide,
}) => {
	const history = useHistory();

	// on click, navigate to base service page
	const handleButtonClick = () => {
		history.push(`/${serviceName.toLowerCase()}`);
	};

	return (
		<div css={ServiceButtonStyle(hide)} onClick={handleButtonClick}>
			<h2 css={ServiceButtonTextStyle}>Return to {serviceName}</h2>
		</div>
	);
};

const ServiceButtonStyle = (hidden: string) => css`
	 {
		visibility: ${hidden};
		width: 16em;
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

const ServiceButtonTextStyle = css`
	 {
		text-align: center;
		margin: 0;
		padding: 0.5em 0 0 0;
	}
`;
