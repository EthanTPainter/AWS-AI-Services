import React from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router } from "react-router-dom";

import { App } from "./App.js";
import { ComprehendPage } from "./services/service";

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route exact path="/comprehend" component={ComprehendPage} />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));
