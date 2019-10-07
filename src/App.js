import React from "react";

import ServiceHeader from "./shared/header/service-header/service-header";
import { ServiceGrid } from "./shared/landing-page/grid/service-grid";
import ServiceFooter from "./shared/footer/service-footer/service-footer";

import "./App.css";

const App = () => {
  return (
    <div id="app">
      <ServiceHeader
        title="AWS AI Services"
      />
      <ServiceGrid />
      <ServiceFooter repoUrl="https://www.github.com/EthanTPainter/AWS-AI-Services" />
    </div>
  );
};

export default App;
