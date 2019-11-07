import React, { FunctionComponent } from "react";
import { History } from "history";

import { TITLES } from "../enums";
import { ServiceBlock } from "./block";

import "../css/landing-page/grid.css";
import "../css/landing-page/block.css";

type ServiceGridProps = {
  history: History;
};

export const ServiceGrid: FunctionComponent<ServiceGridProps> = ({
  history,
}) => {
  return (
    <div className="service-grid">
      <div className="comprehend">
        <ServiceBlock name={TITLES.COMPREHEND} history={history} />
      </div>

      <div className="forecast">
        <ServiceBlock name={TITLES.FORECAST} history={history} />
      </div>

      <div className="lex">
        <ServiceBlock name={TITLES.LEX} history={history} />
      </div>

      <div className="personalize">
        <ServiceBlock name={TITLES.PERSONALIZE} history={history} />
      </div>

      <div className="polly">
        <ServiceBlock name={TITLES.POLLY} history={history} />
      </div>

      <div className="rekognition">
        <ServiceBlock name={TITLES.REKOGNITION} history={history} />
      </div>

      <div className="textract">
        <ServiceBlock name={TITLES.TEXTRACT} history={history} />
      </div>

      <div className="transcribe">
        <ServiceBlock name={TITLES.TRANSCRIBE} history={history} />
      </div>

      <div className="translate">
        <ServiceBlock name={TITLES.TRANSLATE} history={history} />
      </div>
    </div>
  );
};