/** @jsx jsx */
import React, { useState } from "react";
import { css, jsx } from "@emotion/core";


export const TextField = () => {
  const [userText, setText] = useState("");

  const handleChange = (input) => {
    setText(input.target.value);
  };

  return (
    <div css={MainContainerStyle}>
      <h2 css={TitleStyle}>Enter Text</h2>
      <textarea
        css={TextFieldStyle}
        type="text"
        placeholder="Enter text to comprehend..."
        onChange={handleChange}
      ></textarea>
    </div>
  );
};

// CSS
const MainContainerStyle = css`
  display: grid;
  grid-template-areas:
    ".  fieldTitle   fieldTitle   ."
    ".  fieldText    fieldText    .";
`;

const TextFieldStyle = css`
  grid-area: fieldText;
  justify-content: stretch;

  :focus {
    border-color: #2684FF;
    box-shadow: 0 0 0 1px #2684FF;
  }

  border-radius: 4px;
  font-size: 1.5em;
  margin: 0 0 0 0.4em;
  padding: 0.5em;
  height: 12em;
`;

const TitleStyle = css`
  grid-area: fieldTitle;
  justify-self: center;
  color: var(--text-color);
  font-size: 2em;
`;
