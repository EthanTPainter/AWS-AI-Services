/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";

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

	const serviceBlockColor = (
		name: string
	): { main: string; secondary: string; hover: string } => {
		switch (name) {
			case TITLES.COMPREHEND:
				return {
					main: "var(--comprehend-block-background-color)",
					secondary: "var(--comprehend-block-background-hover-color)",
					hover: "var(--comprehend-block-hover-shadow)",
				};
			case TITLES.FORECAST:
				return {
					main: "var(--forecast-block-background-color)",
					secondary: "var(--forecast-block-background-hover-color)",
					hover: "var(--forecast-block-hover-shadow)",
				};
			case TITLES.LEX:
				return {
					main: "var(--lex-block-background-color)",
					secondary: "var(--lex-block-background-hover-color)",
					hover: "var(--lex-block-hover-shadow)",
				};
			case TITLES.PERSONALIZE:
				return {
					main: "var(--personalize-block-background-color)",
					secondary: "var(--personalize-block-background-hover-color)",
					hover: "var(--personalize-block-hover-shadow)",
				};
			case TITLES.POLLY:
				return {
					main: "var(--polly-block-background-color)",
					secondary: "var(--polly-block-background-hover-color)",
					hover: "var(--polly-block-hover-shadow)",
				};
			case TITLES.REKOGNITION:
				return {
					main: "var(--rekognition-block-background-color)",
					secondary: "var(--rekognition-block-background-hover-color)",
					hover: "var(--rekognition-block-hover-shadow)",
				};
			case TITLES.TEXTRACT:
				return {
					main: "var(--textract-block-background-color)",
					secondary: "var(--textract-block-background-hover-color)",
					hover: "var(--textract-block-hover-shadow)",
				};
			case TITLES.TRANSCRIBE:
				return {
					main: "var(--transcribe-block-background-color)",
					secondary: "var(--transcribe-block-background-hover-color)",
					hover: "var(--transcribe-block-hover-shadow)",
				};
			case TITLES.TRANSLATE:
				return {
					main: "var(--translate-block-background-color)",
					secondary: "var(--translate-block-background-hover-color)",
					hover: "var(--translate-block-hover-shadow)",
				};
			default: {
				return {
					main: "var(--comprehend-block-background-color)",
					secondary: "var(--comprehend-block-background-hover-color)",
					hover: "var(--comprehend-block-hover-shadow)",
				};
			}
		}
	};

	const colors = serviceBlockColor(props.name);

	return (
		<div
			css={ServiceBlockStyle(colors.main, colors.secondary, colors.hover)}
			onClick={() => onServiceSelect(props.name, props.history)}
		>
			<div css={ServiceImageStyle}>{renderServiceSvg(props.name)}</div>
			<h1 css={ServiceNameStyle}>{props.name}</h1>
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

const ServiceBlockStyle = (
	mainColor: string,
	secondColor: string,
	hoverShadow: string
) => css`
	 {
		display: grid;
		grid-template-areas:
			"image"
			"image"
			"name";
		background: ${mainColor};

		:hover {
			background: ${secondColor};
			box-shadow: ${hoverShadow};
		}
	}
`;

const ServiceImageStyle = css`
	 {
		margin-top: 8%;
		grid-area: image;
	}
`;

const ServiceNameStyle = css`
	 {
		grid-area: name;
	}
`;
