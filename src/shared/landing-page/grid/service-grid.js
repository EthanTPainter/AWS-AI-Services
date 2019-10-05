import React from "react";
import { hot } from "react-hot-loader";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";

import ServiceBlock from "./service-block/service-block";
import Comprehend from "../../../packages/comprehend/comprehend";
import Forecast from "../../../packages/forecast/forecast";
import Lex from "../../../packages/lex/lex";
import Personalize from "../../../packages/personalize/personalize";
import Polly from "../../../packages/polly/polly";
import Rekognition from "../../../packages/rekognition/rekognition";
import Textract from "../../../packages/textract/textract";
import Transcribe from "../../../packages/transcribe/transcribe";
import Translate from "../../../packages/translate/translate";

import "./service-grid.css";
import "./service-block/service-block.css";

const ServiceGrid = () => {
  return (
    <Router>
      <div className="service-grid">
        <div className="comprehend">
          <ServiceBlock name="Comprehend">
            <Link to="/comprehend">Comprehend</Link>
          </ServiceBlock>
        </div>

        <div className="forecast">
          <ServiceBlock name="Forecast">
            <Link to="/forecast">Comprehend</Link>
          </ServiceBlock>
        </div>

        <div className="lex">
          <ServiceBlock name="Lex">
            <Link to="/lex">Comprehend</Link>
          </ServiceBlock>
        </div>

        <div className="personalize">
          <ServiceBlock name="Personalize">
            <Link to="/personalize">Comprehend</Link>
          </ServiceBlock>
        </div>

        <div className="polly">
          <ServiceBlock name="Polly">
            <Link to="/polly">Comprehend</Link>
          </ServiceBlock>
        </div>

        <div className="rekognition">
          <ServiceBlock name="Comprehend">
            <Link to="/comprehend">Comprehend</Link>
          </ServiceBlock>
        </div>

        <div className="textract">
          <ServiceBlock name="Textract">
            <Link to="/textract">Textract</Link>
          </ServiceBlock>
        </div>

        <div className="transcribe">
          <ServiceBlock name="Transcribe">
            <Link to="/transcribe">Comprehend</Link>
          </ServiceBlock>
        </div>

        <div className="translate">
          <ServiceBlock name="Translate">
            <Link to="/translate">Comprehend</Link>
          </ServiceBlock>
        </div>
      </div>
      <Route path="/comprehend" component={Comprehend} />
      <Route path="/forecast" component={Forecast} />
      <Route path="/lex" component={Lex} />
      <Route path="/personalize" component={Personalize} />
      <Route path="/polly" component={Polly} />
      <Route path="/rekognition" component={Rekognition} />
      <Route path="/textract" component={Textract} />
      <Route path="/transcribe" component={Transcribe} />
      <Route path="/translate" component={Translate} />
    </Router>
  );
};

export default hot(module)(ServiceGrid);
