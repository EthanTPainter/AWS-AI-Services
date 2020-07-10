/** @jsx jsx */
import React, { FunctionComponent } from "react";
import {css, jsx } from "@emotion/core";
import { History } from "history";

import { TITLES } from "../enums";
import { ServiceBlock } from "./block";

type ServiceGridProps = {
  history: History;
};

export const ServiceGrid: FunctionComponent<ServiceGridProps> = ({
  history,
}) => {
  return (
    <div css={ServiceGridStyle}>
      <div css={ComprehendStyle}>
        <ServiceBlock name={TITLES.COMPREHEND} history={history} />
      </div>

      <div css={ForecastStyle}>
        <ServiceBlock name={TITLES.FORECAST} history={history} />
      </div>

      <div css={PersonalizeStyle}>
        <ServiceBlock name={TITLES.PERSONALIZE} history={history} />
      </div>

      <div css={PollyStyle}>
        <ServiceBlock name={TITLES.POLLY} history={history} />
      </div>

      <div css={RekognitionStyle}>
        <ServiceBlock name={TITLES.REKOGNITION} history={history} />
      </div>

      <div css={TextractStyle}>
        <ServiceBlock name={TITLES.TEXTRACT} history={history} />
      </div>

      <div css={TranscribeStyle}>
        <ServiceBlock name={TITLES.TRANSCRIBE} history={history} />
      </div>

      <div css={TranslateStyle}>
        <ServiceBlock name={TITLES.TRANSLATE} history={history} />
      </div>
    </div>
  );
};

/*
  AWS Services Grid Background
  Note: I'm using this as practice for CSS Grids
  Doing this efficiently, you should use flexbox
*/
const ServiceGridStyle = css`{
  display: grid;
  grid-template-areas:
    "comp     comp    fore    fore    personal  personal  pol       pol"
    "rekog    rekog   tex     tex     transc    transc    transl    transl";
  margin: 3em 10em 2em 10em;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
}`;

/*
  AWS Services in the Grid
*/
const ComprehendStyle = css`{
  grid-area: comp;
}`;

const ForecastStyle = css`{
  grid-area: fore;
}`;

const PersonalizeStyle = css`{
  grid-area: personal;
}`;

const PollyStyle = css`{
  grid-area: pol;
}`;

const RekognitionStyle = css`{
  grid-area: rekog;
}`;

const TextractStyle = css`{
  grid-area: tex;
}`;

const TranscribeStyle = css`{
  grid-area: transc;
}`;

const TranslateStyle = css`{
  grid-area: transl;
}`;
