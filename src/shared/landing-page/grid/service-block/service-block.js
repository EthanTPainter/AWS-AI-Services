import React from "react";
import { hot } from "react-hot-loader";

import ComprehendServiceSvg from "../../../../../assets/package-images/Comprehend.svg";
import ForecastServiceSvg from "../../../../../assets/package-images/Forecast.svg";
import LexServiceSvg from "../../../../../assets/package-images/Lex.svg";
import PersonalizeServiceSvg from "../../../../../assets/package-images/Personalize.svg";
import PollyServiceSvg from "../../../../../assets/package-images/Polly.svg";
import RekognitionServiceSvg from "../../../../../assets/package-images/Rekognition.svg";
import TextractServiceSvg from "../../../../../assets/package-images/Textract.svg";
import TranscribeServiceSvg from "../../../../../assets/package-images/Transcribe.svg";
import TranslateServiceSvg from "../../../../../assets/package-images/Translate.svg";

import "./service-block.css";

const ServiceBlock = (props) => {
  return (
    <div className="service-block">
      <div>
        <h1>{ props.name }</h1>
        {renderServiceSvg(props.name)}
      </div>
      <h3>{props.name}</h3>
    </div>
  );
}

const renderServiceSvg = (name)  => {
  switch(name) {
    case "Comprehend":
      return <ComprehendServiceSvg />;
    case "Forecast":
      return <ForecastServiceSvg />;
    case "Lex":
      return <LexServiceSvg />;
    case "Personalize":
      return <PersonalizeServiceSvg />;
    case "Polly":
      return <PollyServiceSvg />;
    case "Rekognition":
      return <RekognitionServiceSvg />;
    case "Textract":
      return <TextractServiceSvg />;
    case "Transcribe":
      return <TranscribeServiceSvg />;
    case "Translate":
      return <TranslateServiceSvg />;
    default:
      return <ComprehendServiceSvg />
  }
}

export default hot(module)(ServiceBlock);