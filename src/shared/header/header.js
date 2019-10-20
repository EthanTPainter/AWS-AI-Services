import React from "react";

import { Title } from "./title";
import { Description } from "./description";

export const Header = (props) => {

  return (
    <div>
      <Title title={props.title} />
      <Description description={props.description} />
    </div>
  );
};