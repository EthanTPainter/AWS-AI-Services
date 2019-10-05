import React from "react";
import { Button } from "@storybook/react/demo";

// Components
import "./shared/landing-page/grid/service-block/service-block.css";
import ServiceBlock from "./shared/landing-page/grid/service-block/service-block";

export default { title: "Button" };

export const withText = () => <Button>Hello Button</Button>;

export const withEmoji = () => (
  <Button>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);

export const serviceBlock = () => (
  <ServiceBlock name="Service Name" description="Service Description" />
);
