import React, { Component} from "react";
import { hot } from "react-hot-loader";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";

import "./App.css";

class App extends Component {
  render() {
    return(
      <Router>
        <div className="App">
        <h1 id="comprehend-header" > Comprehend </h1>
        <h1 id="comprehend-medical-header" href="/comprehend-medical"> Comprehend Medical </h1>
        <h1 id="forecast-header" href="/forecast"> Forecast </h1>
        <h1 id="image-rekognition-header" href="/image-rekognition"> Image Rekognition </h1>
        <h1 id="lex-header" href="/lex/"> Lex </h1>
        <h1 id="personalize-header" href="/personalize"> Personalize </h1>
        <h1 id="polly-header" href="/polly"> Polly </h1>
        <h1 id="textract-header" href="/textract"> Textract </h1>
        <h1 id="transcribe-header" href="/transcribe"> Transcribe </h1>
        <h1 id="translate-header" href="/translate"> Translate </h1>
        <h1 id="video-rekognition-header" href="/video-rekognition"> Video Rekognition </h1>
      </div>
      </Router>
    );
  }
}

export default hot(module)(App);