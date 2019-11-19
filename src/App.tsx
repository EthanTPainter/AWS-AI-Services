import React, { FunctionComponent } from "react";
import { History } from "history";

import { ServiceGrid } from "./landing-page/grid";
import { Header, Footer } from "./shared";

import "./App.css";
import { ButtonBar } from "./shared/button";

type AppProps = {
  history: History;
};

export const App: FunctionComponent<AppProps> = ({ history }) => {
  return (
    <div id="app">
      <div>
        <ButtonBar hideReturnBtn={true} hideServiceBtn={true} />
        <Header
          title="AWS AI Services"
          mainDescription="Below are a list of Artifical Intelligence (AI) Services provided by
        AWS. Select a service below to see an overview of the service and how to use it."
        />
      </div>
      <ServiceGrid history={history} />
      <Footer repoUrl="https://www.github.com/EthanTPainter/AWS-AI-Services" />
    </div>
  );
};
