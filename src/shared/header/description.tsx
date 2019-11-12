/** @jsx jsx */
import React, { FunctionComponent } from "react";
import { css, jsx } from "@emotion/core";

type DescriptionProps = {
  description: string;
  secondDescription?: string;
  thirdDescription?: string;
};

export const Description: FunctionComponent<DescriptionProps> = ({
  description,
  secondDescription,
  thirdDescription,
}) => {
  if (thirdDescription) {
    return (
      <div css={SubheaderStyle}>
        <p css={CenterSubheaderStyle}>{description}</p>
        <p>{secondDescription}</p>
        <p>{thirdDescription}</p>
      </div>
    );
  } else if (secondDescription) {
    return (
      <div css={SubheaderStyle}>
        <p>{description}</p>
        <p>{secondDescription}</p>
      </div>
    );
  } else {
    return (
      <div>
        <p css={SubheaderStyle}>{description}</p>
      </div>
    );
  }
};

const CenterSubheaderStyle = css`
	 {
		color: var(--text-color);
		text-align: center;
		margin: 0 6em;
	}
`;

const SubheaderStyle = css`
	 {
		color: var(--text-color);
		text-align: left;
		font-size: 1.5em;
		margin: 0 6em;
	}
`;
