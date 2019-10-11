import React from "react";

import { ServiceHeader } from "./landing-page/header";
import { ServiceGrid } from "./landing-page/grid";
import { ServiceFooter } from "./shared/footer/service-footer";

import "./App.css";

export const App = (props) => {
  return (
    <div id="app">
      <ServiceHeader title="AWS AI Services" />
      <ServiceGrid history={props.history}/>
      <ServiceFooter repoUrl="https://www.github.com/EthanTPainter/AWS-AI-Services" />
    </div>
  );
};
