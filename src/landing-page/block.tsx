import React from "react";

import { TITLES } from "../enums";

import ComprehendServiceSvg from "../../assets/package-images/Comprehend.svg";
import ForecastServiceSvg from "../../assets/package-images/Forecast.svg";
import LexServiceSvg from "../../assets/package-images/Lex.svg";
import PersonalizeServiceSvg from "../../assets/package-images/Personalize.svg";
import PollyServiceSvg from "../../assets/package-images/Polly.svg";
import RekognitionServiceSvg from "../../assets/package-images/Rekognition.svg";
import TextractServiceSvg from "../../assets/package-images/Textract.svg";
import TranscribeServiceSvg from "../../assets/package-images/Transcribe.svg";
import TranslateServiceSvg from "../../assets/package-images/Translate.svg";

import "../css/landing-page/block.css";

export const ServiceBlock = (props: { name: string; history: any }) => {
  // After selecting a service, redirect to the service page
  const onServiceSelect = (name: string, history: any) => {
    switch (name) {
      case TITLES.COMPREHEND:
        history.push("/comprehend");
        return;
      case TITLES.FORECAST:
        history.push("/forecast");
        return;
      case TITLES.LEX:
        history.push("/lex");
        return;
      case TITLES.POLLY:
        history.push("/polly");
        return;
      case TITLES.REKOGNITION:
        history.push("/rekognition");
        return;
      case TITLES.TEXTRACT:
        history.push("/textract");
        return;
      case TITLES.TRANSCRIBE:
        history.push("/transcribe");
        return;
      case TITLES.TRANSLATE:
        history.push("/translate");
        return;
      default:
        return <h1>Not Found</h1>;
    }
  };

  return (
    <div
      className="service-block"
      onClick={() => onServiceSelect(props.name, props.history)}
    >
      <div className="service-image">{renderServiceSvg(props.name)}</div>
      <h1 className="service-name">{props.name}</h1>
    </div>
  );
};

const renderServiceSvg = (name: string) => {
  switch (name) {
    case TITLES.COMPREHEND:
      return <ComprehendServiceSvg />;
    case TITLES.FORECAST:
      return <ForecastServiceSvg />;
    case TITLES.LEX:
      return <LexServiceSvg />;
    case TITLES.PERSONALIZE:
      return <PersonalizeServiceSvg />;
    case TITLES.POLLY:
      return <PollyServiceSvg />;
    case TITLES.REKOGNITION:
      return <RekognitionServiceSvg />;
    case TITLES.TEXTRACT:
      return <TextractServiceSvg />;
    case TITLES.TRANSCRIBE:
      return <TranscribeServiceSvg />;
    case TITLES.TRANSLATE:
      return <TranslateServiceSvg />;
    default:
      return <ComprehendServiceSvg />;
  }
};