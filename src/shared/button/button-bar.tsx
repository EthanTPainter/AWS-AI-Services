/** @jsx jsx */
import React, { FunctionComponent, useState } from "react";
import { css, jsx } from "@emotion/core";
import { DarkModeButton } from "./dark-button";
import { GridButton } from "./grid-button";
import { ServiceButton } from "./service-button";

type ButtonBarProps = {
	hideReturnBtn: boolean;
	hideServiceBtn: boolean;
	serviceName?: string;
};

/* A bar at the top of each service to show available buttons to select */
export const ButtonBar: FunctionComponent<ButtonBarProps> = ({
	hideReturnBtn,
	hideServiceBtn,
	serviceName,
}) => {
	const gridBtnVisibility = hideReturnBtn ? "hidden" : "visible";
	const serviceBtnVisibility = hideServiceBtn ? "hidden" : "visible";

	return (
		<div css={ContainerStyle}>
			<div css={DarkModeBtnStyle}>
				<DarkModeButton />
			</div>
			<div css={GridBtnStyle}>
				<GridButton hide={gridBtnVisibility} />
			</div>
			<div css={ServiceBtnStyle}>
				<ServiceButton
					hide={serviceBtnVisibility}
					serviceName={serviceName || ""}
				/>
			</div>
		</div>
	);
};

const ContainerStyle = css`
	 {
		display: grid;
		grid-template-areas: "darkBtn gridBtn serviceBtn";
		grid-template-columns: 1fr 1fr 2fr 3fr;
	}
`;

const DarkModeBtnStyle = css`
	 {
		grid-area: darkBtn;
	}
`;

const GridBtnStyle = css`
	 {
		grid-area: gridBtn;
	}
`;

const ServiceBtnStyle = css`
	 {
		grid-area: serviceBtn;
	}
`;
