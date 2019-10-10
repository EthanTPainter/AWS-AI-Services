import React from "react";

import { ServicesENUMS } from "../../../enums";
import ComprehendServiceSvg from "../../../../assets/package-images/Comprehend.svg";
import ForecastServiceSvg from "../../../../assets/package-images/Forecast.svg";
import LexServiceSvg from "../../../../assets/package-images/Lex.svg";
import PersonalizeServiceSvg from "../../../../assets/package-images/Personalize.svg";
import PollyServiceSvg from "../../../../assets/package-images/Polly.svg";
import RekognitionServiceSvg from "../../../../assets/package-images/Rekognition.svg";
import TextractServiceSvg from "../../../../assets/package-images/Textract.svg";
import TranscribeServiceSvg from "../../../../assets/package-images/Transcribe.svg";
import TranslateServiceSvg from "../../../../assets/package-images/Translate.svg";

import "./service-block.css";

export const ServiceBlock = props => {
  // After selecting a service, redirect to the service page
  const onServiceSelect = (name, history) => {
    switch (name) {
      case ServicesENUMS.COMPREHEND:
        history.push("/comprehend");
        return;
      case ServicesENUMS.FORECAST:
        history.push("/forecast");
        return;
      case ServicesENUMS.LEX:
        history.push("/lex");
        return;
      case ServicesENUMS.POLLY:
        history.push("/polly");
        return;
      case ServicesENUMS.REKOGNITION:
        history.push("/rekognition");
        return;
      case ServicesENUMS.TEXTRACT:
        history.push("/textract");
        return;
      case ServicesENUMS.TRANSCRIBE:
        history.push("/transcribe");
        return;
      case ServicesENUMS.TRANSLATE:
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

const renderServiceSvg = name => {
  switch (name) {
    case ServicesENUMS.COMPREHEND:
      return <ComprehendServiceSvg />;
    case ServicesENUMS.FORECAST:
      return <ForecastServiceSvg />;
    case ServicesENUMS.LEX:
      return <LexServiceSvg />;
    case ServicesENUMS.PERSONALIZE:
      return <PersonalizeServiceSvg />;
    case ServicesENUMS.POLLY:
      return <PollyServiceSvg />;
    case ServicesENUMS.REKOGNITION:
      return <RekognitionServiceSvg />;
    case ServicesENUMS.TEXTRACT:
      return <TextractServiceSvg />;
    case ServicesENUMS.TRANSCRIBE:
      return <TranscribeServiceSvg />;
    case ServicesENUMS.TRANSLATE:
      return <TranslateServiceSvg />;
    default:
      return <ComprehendServiceSvg />;
  }
};
