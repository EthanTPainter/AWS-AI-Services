/** @jsx jsx */
import React, { FunctionComponent } from "react";
import { css, jsx } from "@emotion/core";

type TitleProps = {
  title: string;
};

export const Title: FunctionComponent<TitleProps> = ({ title }) => {
  return <h1 css={HeaderStyle}>{title}</h1>;
};

const HeaderStyle = css`
	 {
		color: var(--text-color);
		text-align: center;
		font-size: 3em;
	}
`;