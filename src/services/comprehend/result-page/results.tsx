/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";
import { useHistory } from "react-router-dom";
import { ButtonBar, Header } from "../../../shared";

export const ComprehendResults = () => {
	let history = useHistory();

	return (
		<div>
			<ButtonBar
				hideReturnBtn={false}
				hideServiceBtn={false}
				serviceName="Comprehend"
			/>
			<Header title="Results" mainDescription="Let's see the results" />
		</div>
	);
};
