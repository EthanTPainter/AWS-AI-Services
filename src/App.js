import React, { Component } from "react";
import { hot } from "react-hot-loader";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";

import "./App.css";

import Comprehend from "../packages/comprehend/comprehend";
import ComprehendMedical from "../packages/comprehend-medical/comprehend-medical";
import Forecast from "../packages/forecast/forecast";
import ImageRekognition from "../packages/image-rekognition/image-rekognition";
import Lex from "../packages/lex/lex";
import Personalize from "../packages/personalize/personalize";
import Polly from "../packages/polly/polly";
import Textract from "../packages/textract/textract";
import Transcribe from "../packages/transcribe/transcribe";
import Translate from "../packages/translate/translate";
import VideoRekognition from "../packages/video-rekognition/video-rekognition";

class App extends Component {
  render() {
    return(
      <Router>
        <div class="app">

          <div class="comprehend">
            <h1 id="comprehend-image">Comprehend Image</h1>
            <Link to="/comprehend">Comprehend</Link>
          </div>

          <div class="comprehend-medical">
            <h1 id="comprehend-medical-image">Comprehend Medical Image</h1>
            <Link to="/comprehend-medical">Comprehend Medical</Link>
          </div>
          
          <div class="forecast">
            <h1 id="forecast-image">Forecast Image</h1>
            <Link to="/forecast">Forecast</Link>
          </div>

          <div class="image-rekognition">
            <h1 id="image-rekognition-image">Image Rekognition Image</h1>
            <Link to="/image-rekognition">Image Rekognition</Link>
          </div>

          <div id="lex">
            <h1 id="lex-image">Lex Image</h1>
            <Link to="/lex">Lex</Link>
          </div>

          <div class="personalize">
            <h1 id="personalize-image">Personalize Image</h1>
            <Link to="/personalize">Personalize</Link>
          </div>

          <div class="polly">
            <h1 id="polly-image">Polly Image</h1>
            <Link to="/polly">Polly</Link>
          </div>

          <div class="textract">
            <h1 id="textract-image">Textract Image</h1>
            <Link to="/textract">Textract</Link>
          </div>

          <div class="transcribe">
            <h1 id="transcribe-image">Transcribe Image</h1>
            <Link to="/transcribe">Transcribe</Link>
          </div>

          <div class="translate">
            <h1 id="translate-image">Translate Image</h1>
            <Link to="/translate">Translate</Link>
          </div>

          <div class="video-rekognition">
            <h1 id="video-rekognition-image">Video Rekognition Image</h1>
            <Link to="/video-rekognition">Video Rekognition</Link>
          </div>
        </div>
        <Route path="/comprehend" component={Comprehend} />
        <Route path="/comprehend-medical" component={ComprehendMedical} />
        <Route path="/forecast" component={Forecast} />
        <Route path="/image-rekognition" component={ImageRekognition} />
        <Route path="/lex" component={Lex} />
        <Route path="/personalize" component={Personalize} />
        <Route path="/polly" component={Polly} />
        <Route path="/textract" component={Textract} />
        <Route path="/transcribe" component={Transcribe} />
        <Route path="/translate" component={Translate} />
        <Route path="/video-rekognition" component={VideoRekognition} />
      </Router>
    );
  }
}

export default hot(module)(App);