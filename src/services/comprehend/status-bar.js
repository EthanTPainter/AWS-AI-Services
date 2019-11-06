/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";

const getColor = percent => {
  console.log(`Percent: ${percent}`);
  if (percent <= 15) {
    return "#f00";
  } else if (percent > 15 && percent < 30) {
  } else if (percent === 30) {
    return "#f90";
  } else if (percent > 30 && percent < 45) {
  } else if (percent === 45) {
    return "#ff0";
  } else if (percent > 45 && percent < 60) {
  } else if (percent === 60) {
  } else if (percent > 60 && percent < 85) {
  } else {
    return "#92ff00";
  }
};

export const TestProgressBar = props => {
  const resultTerm = "TERM";
  const percent = 15;
  const color = getColor(percent);
  console.log(`COLOR: ${color}`);

  return (
    <div>
      <h2 css={TitleStyle}>{resultTerm}</h2>
      <div css={ProgressBarStyle}>
        <div
          css={css`
            width: ${percent}%;
            height: 100%;
            background-color: ${color};
            border-radius: 20em;
          `}
        ></div>
      </div>
    </div>
  );
};

const TitleStyle = css`
  text-align: center;
  margin-top: 3em;
`;

const ProgressBarStyle = css`
  background-color: lightgrey;
  height: 30px;
  border-radius: 20em;
  margin: 0 25em;
`;
