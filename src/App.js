import React, { Component } from "react";
import { hot } from "react-hot-loader";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";

import "./App.css";

class App extends Component {
  render() {
    return(
      <Router>
        <div className="App">

          <div id="comprehend">
            <h1 id="comprehend-image">Comprehend Image</h1>
            <Link to="/comprehend">Comprehend</Link>
          </div>

          <div id="comprehend-medical">
            <h1 id="comprehend-medical-image">Comprehend Medical Image</h1>
            <Link to="/comprehend-medical">Comprehend Medical</Link>
          </div>
          
          <div id="forecast">
            <h1 id="forecast-image">Forecast Image</h1>
            <Link to="/forecast">Forecast</Link>
          </div>

          <div id="image-rekognition">
            <h1 id="image-rekognition-image">Image Rekognition Image</h1>
            <Link to="/image-rekognition">Image Rekognition</Link>
          </div>

          <div id="lex">
            <h1 id="lex-image">Lex Image</h1>
            <Link to="/lex">Lex</Link>
          </div>

          <div id="personalize">
            <h1 id="personalize-image">Personalize Image</h1>
            <Link to="/personalize">Personalize</Link>
          </div>

          <div id="polly">
            <h1 id="polly-image">Polly Image</h1>
            <Link to="/polly">Polly</Link>
          </div>

          <div id="textract">
            <h1 id="textract-image">Textract Image</h1>
            <Link to="/textract">Textract</Link>
          </div>

          <div id="transcribe">
            <h1 id="transcribe-image">Transcribe Image</h1>
            <Link to="/transcribe">Transcribe</Link>
          </div>

          <div id="translate">
            <h1 id="translate-image">Translate Image</h1>
            <Link to="/translate">Translate</Link>
          </div>

          <div id="video-rekognition">
            <h1 id="video-rekognition-image">Video Rekognition Image</h1>
            <Link to="/video-rekognition">Video Rekognition</Link>
          </div>
        </div>
      </Router>
    );
  }
}

export default hot(module)(App);