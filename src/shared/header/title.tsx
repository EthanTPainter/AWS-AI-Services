import React, { FunctionComponent } from "react";

import "../../css/shared/header.css";

type TitleProps = {
  title: string;
};

export const Title: FunctionComponent<TitleProps> = ({ title }) => {
  return <h1 id="header">{title}</h1>;
};
