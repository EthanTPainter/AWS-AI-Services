/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";

export const Buttons = () => {
  return (
    <div css={ContainerStyle}>
      <div css={ComprehendBtnStyle}>Comprehend</div>
      <div css={ComprehendMedBtnStyle}>Comprehend Medical</div>
    </div>
  );
};

const ContainerStyle = css`
  display: grid;
  grid-template-areas:
    ".  comp  compMed   .";
  
  margin: 5em;
`;

const ComprehendBtnStyle = css`
  grid-area: comp;
  justify-self: center;

  :hover {
    transform: scale(1.1);
    background: var(--comprehend-btn-hover-color);
  }
  
  font-size: 2em;
  padding: .5em;
  border-radius: 2em;
  background: var(--comprehend-btn-color);
`;

const ComprehendMedBtnStyle = css`
  grid-area: compMed;
  justify-self: center;

  :hover {
    transform: scale(1.1);
    background: var(--comprehend-med-btn-hover-color);
  }

  font-size: 2em;
  padding: .5em;
  border-radius: 2em;
  background: var(--comprehend-med-btn-color);
`;
