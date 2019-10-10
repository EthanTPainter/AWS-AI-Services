import React from "react";

import { ServicesENUMS } from "../../enums/services";
import { ServiceBlock } from "./service-block/service-block";

import "./service-grid.css";
import "./service-block/service-block.css";

export const ServiceGrid = props => {
  return (
    <div className="service-grid">
      <div className="comprehend">
        <ServiceBlock name={ServicesENUMS.COMPREHEND} history={props.history} />
      </div>

      <div className="forecast">
        <ServiceBlock name={ServicesENUMS.FORECAST} history={props.history} />
      </div>

      <div className="lex">
        <ServiceBlock name={ServicesENUMS.LEX} history={props.history} />
      </div>

      <div className="personalize">
        <ServiceBlock
          name={ServicesENUMS.PERSONALIZE}
          history={props.history}
        />
      </div>

      <div className="polly">
        <ServiceBlock name={ServicesENUMS.POLLY} history={props.history} />
      </div>

      <div className="rekognition">
        <ServiceBlock
          name={ServicesENUMS.REKOGNITION}
          history={props.history}
        />
      </div>

      <div className="textract">
        <ServiceBlock name={ServicesENUMS.TEXTRACT} history={props.history} />
      </div>

      <div className="transcribe">
        <ServiceBlock name={ServicesENUMS.TRANSCRIBE} history={props.history} />
      </div>

      <div className="translate">
        <ServiceBlock name={ServicesENUMS.TRANSLATE} history={props.history} />
      </div>
    </div>
  );
};
