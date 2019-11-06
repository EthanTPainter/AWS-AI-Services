/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";

export const Buttons = props => {
  // Select specific btn styles based on readonly prop
  let CompBtnStyle = null;
  let CompMedBtnStyle = null;
  if (props.readonly) {
    CompBtnStyle = ComprehendReadBtnStyle;
    CompMedBtnStyle = ComprehendReadMedBtnStyle;
  } else {
    CompBtnStyle = ComprehendBtnStyle;
    CompMedBtnStyle = ComprehendMedBtnStyle;
  }

  return (
    <div css={ContainerStyle}>
      <div css={CompBtnStyle}>Comprehend</div>
      <div css={CompMedBtnStyle}>Comprehend Medical</div>
    </div>
  );
};

const ContainerStyle = css`
  display: grid;
  grid-template-areas: ".  comp  compMed   .";

  margin: 5em;
`;

const ComprehendBtnStyle = css`
  grid-area: comp;
  justify-self: center;

  :hover {
    transform: scale(1.1);
    background: var(--comprehend-btn-hover-color);
  }

  cursor: pointer;
  font-size: 2em;
  padding: 0.5em;
  border-radius: 2em;
  background: var(--comprehend-btn-color);
`;

const ComprehendReadBtnStyle = css`
  grid-area: comp;
  justify-self: center;

  font-size: 2em;
  padding: 0.5em;
  border-radius: 2em;
  background: #dddddd;
`;

const ComprehendMedBtnStyle = css`
  grid-area: compMed;
  justify-self: center;

  :hover {
    transform: scale(1.1);
    background: var(--comprehend-med-btn-hover-color);
  }

  cursor: pointer;
  font-size: 2em;
  padding: 0.5em;
  border-radius: 2em;
  background: var(--comprehend-med-btn-color);
`;

const ComprehendReadMedBtnStyle = css`
  grid-area: compMed;
  justify-self: center;

  font-size: 2em;
  padding: 0.5em;
  border-radius: 2em;
  background: #dddddd
`;