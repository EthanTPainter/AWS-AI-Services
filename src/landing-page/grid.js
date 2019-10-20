import React from "react";

import { TITLES } from "../enums";
import { ServiceBlock } from "./block";

import "../css/landing-page/grid.css";
import "../css/landing-page/block.css";

export const ServiceGrid = props => {
  return (
    <div className="service-grid">
      <div className="comprehend">
        <ServiceBlock name={TITLES.COMPREHEND} history={props.history} />
      </div>

      <div className="forecast">
        <ServiceBlock name={TITLES.FORECAST} history={props.history} />
      </div>

      <div className="lex">
        <ServiceBlock name={TITLES.LEX} history={props.history} />
      </div>

      <div className="personalize">
        <ServiceBlock name={TITLES.PERSONALIZE} history={props.history} />
      </div>

      <div className="polly">
        <ServiceBlock name={TITLES.POLLY} history={props.history} />
      </div>

      <div className="rekognition">
        <ServiceBlock name={TITLES.REKOGNITION} history={props.history} />
      </div>

      <div className="textract">
        <ServiceBlock name={TITLES.TEXTRACT} history={props.history} />
      </div>

      <div className="transcribe">
        <ServiceBlock name={TITLES.TRANSCRIBE} history={props.history} />
      </div>

      <div className="translate">
        <ServiceBlock name={TITLES.TRANSLATE} history={props.history} />
      </div>
    </div>
  );
};
