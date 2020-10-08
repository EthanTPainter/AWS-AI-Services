import React, { FunctionComponent } from "react";
const ReactDOM = require("react-dom");
import { Route, HashRouter as Router } from "react-router-dom";

import { App } from "./App";
import { ComprehendLanding } from "./services/comprehend/landing-page";
import { ComprehendResults } from "./services/comprehend/result-page";
import { Rekognition } from "./services/rekognition";
import { Textract } from "./services/textract";
import { Transcribe } from "./services/transcribe";
import { Translate } from "./services/translate";
import { NotFound } from "./not-found";

const Routing: FunctionComponent = () => (
  <Router>
    <Route exact path="/" component={App} />
    <Route exact path="/comprehend" component={ComprehendLanding} />
    <Route exact path="/comprehend/results" component={ComprehendResults} />
    <Route exact path="/rekognition" component={Rekognition} />
    <Route exact path="/textract" component={Textract} />
    <Route exact path="/transcribe" component={Transcribe} />
    <Route exact path="/translate" component={Translate} />
    <Route exact path="/error" component={NotFound} />
  </Router>
);

// Experimental rendering
// ReactDOM.createRoot(document.getElementById("root")).render(<Routing />);

// Non experimental react rendering
ReactDOM.render(<Routing />, document.getElementById("root"));
