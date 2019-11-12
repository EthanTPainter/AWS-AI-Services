/** @jsx jsx */
import React, { FunctionComponent } from "react";
import { jsx, css } from "@emotion/core";

type FooterProps = {
  repoUrl: string;
};

export const Footer: FunctionComponent<FooterProps> = ({ repoUrl }) => {
  return (
    <div css={FooterStyle}>
      <p>Ethan T. Painter &copy; {new Date().getFullYear()}</p>
      <p>
        Source Code found on <a href={repoUrl}>GitHub</a>
      </p>
    </div>
  );
};

const FooterStyle = css`{
  background-color: var(--footer-background-color);
  border-radius: 20px;
  margin-top: 100px;
  padding: 30px;
  text-align: center;
}`;
