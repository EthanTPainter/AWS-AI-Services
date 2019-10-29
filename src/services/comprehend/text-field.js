/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";
import styled from "@emotion/styled";

export const TextField = () => {
  return (
    <div css={mainContainerStyle}>
      <h2 css={fieldTitleStyle}>Text</h2>
      <div css={textContainerStyle}>
        <input placeholder="Enter text to comprehend..."></input>
      </div>
    </div>
  );
};

// CSS
const mainContainerStyle = css`
  display: grid;
  grid-template-areas:
    ".  title   title   ."
    ".  select  select  .";
`;

const textContainerStyle = css`
  border-radius: 1em;
  margin: 0 1em;
`;

const textFieldStyle = css`
  margin: 0 0 0 0.4em;
  padding: 0.5em;
`;

const fieldTitleStyle = css`
  justify-self: center;
  color: var(--text-color);
  font-size: 2em;
`;
