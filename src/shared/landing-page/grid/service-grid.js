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

class ServiceGrid extends React.Component {
  render() {
    return (
      <Router>
        <div class="service-grid">
          <div class="comprehend">
            <ServiceBlock
              name="Comprehend"
              description="Will comprehend stuff"
            >
              <Link to="/comprehend">Comprehend</Link>
            </ServiceBlock>
          </div>
          
          <div class="forecast">
          <ServiceBlock
              name="Forecast"
              description="Forecast stuff"
            >
              <Link to="/forecast">Comprehend</Link>
            </ServiceBlock>
          </div>

          <div class="lex">
          <ServiceBlock
              name="Lex"
              description="Lex stuff"
            >
              <Link to="/lex">Comprehend</Link>
            </ServiceBlock>
          </div>

          <div class="personalize">
          <ServiceBlock
              name="Personalize"
              description="Personalize stuff"
            >
              <Link to="/personalize">Comprehend</Link>
            </ServiceBlock>
          </div>

          <div class="polly">
          <ServiceBlock
              name="Polly"
              description="Polly stuff"
            >
              <Link to="/polly">Comprehend</Link>
            </ServiceBlock>
          </div>

          <div class="rekognition">
          <ServiceBlock
              name="Comprehend"
              description="Will comprehend stuff"
            >
              <Link to="/comprehend">Comprehend</Link>
            </ServiceBlock>
          </div>

          <div class="textract">
          <ServiceBlock
              name="Textract"
              description="Textract stuff"
            >
              <Link to="/textract">Textract</Link>
            </ServiceBlock>
          </div>

          <div class="transcribe">
          <ServiceBlock
              name="Transcribe"
              description="Transcribe stuff"
            >
              <Link to="/transcribe">Comprehend</Link>
            </ServiceBlock>
          </div>

          <div class="translate">
          <ServiceBlock
              name="Translate"
              description="Translate stuff"
            >
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
  }
}

export default hot(module)(ServiceGrid);
