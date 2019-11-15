import React, { FunctionComponent } from "react";
const ReactDOM = require("react-dom");
import { Route, HashRouter as Router } from "react-router-dom";

import { App } from "./App";
import { ComprehendLanding } from "./services/comprehend/landing-page";
import { Forecast } from "./services/forecast";
import { Lex } from "./services/lex";
import { Personalize } from "./services/personalize";
import { Polly } from "./services/polly";
import { Rekognition } from "./services/rekognition";
import { Textract } from "./services/textract";
import { Transcribe } from "./services/transcribe";
import { Translate } from "./services/translate";
import { NotFound } from "./not-found";

const Routing: FunctionComponent = () => (
  <Router>
    <Route exact path="/" component={App} />
    <Route exact path="/comprehend" component={ComprehendLanding} />
    <Route exact path="/forecast" component={Forecast} />
    <Route exact path="/lex" component={Lex} />
    <Route exact path="/personalize" component={Personalize} />
    <Route exact path="/polly" component={Polly} />
    <Route exact path="/rekognition" component={Rekognition} />
    <Route exact path="/textract" component={Textract} />
    <Route exact path="/transcribe" component={Transcribe} />
    <Route exact path="/translate" component={Translate} />
    <Route exact path="/error" component={NotFound} />
  </Router>
);

ReactDOM.render(<Routing />, document.getElementById("root"));
