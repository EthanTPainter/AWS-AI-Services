import React from "react";

import { ServiceGrid } from "./landing-page/grid";
import { Header, Footer } from "./shared";

import "./css/App.css";

export const App = props => {
  return (
    <div id="app">
      <Header
        title="AWS AI Services"
        description="Below are a list of Artifical Intelligence (AI) Services provided by
        AWS. Select a service below to start using it"
      />
      <ServiceGrid history={props.history} />
      <Footer repoUrl="https://www.github.com/EthanTPainter/AWS-AI-Services" />
    </div>
  );
};
