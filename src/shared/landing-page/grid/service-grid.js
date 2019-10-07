import React from "react";

import { ServiceBlock } from "./service-block/service-block";

import "./service-grid.css";
import "./service-block/service-block.css";

export const ServiceGrid = () => {
  return (
    <div className="service-grid">
      <div className="comprehend">
        <ServiceBlock name="Comprehend" />
      </div>

      <div className="forecast">
        <ServiceBlock name="Forecast" />
      </div>

      <div className="lex">
        <ServiceBlock name="Lex" />
      </div>

      <div className="personalize">
        <ServiceBlock name="Personalize" />
      </div>

      <div className="polly">
        <ServiceBlock name="Polly" />
      </div>

      <div className="rekognition">
        <ServiceBlock name="Rekognition" />
      </div>

      <div className="textract">
        <ServiceBlock name="Textract" />
      </div>

      <div className="transcribe">
        <ServiceBlock name="Transcribe" />
      </div>

      <div className="translate">
        <ServiceBlock name="Translate" />
      </div>
    </div>
  );
};
