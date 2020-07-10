import { APIGatewayEvent } from "aws-lambda";
import { RequestEventBody } from "../models/request-event-body";
import {
	ComprehendBody,
	ComprehendMedicalBody,
	ForecastBody,
	LexBody,
	PersonalizeBody,
	PollyBody,
	RekognitionBody,
	TextractBody,
	TranscribeBody,
	TranslateBody,
} from "models/event-bodies";

export const getBody = (
	event: APIGatewayEvent,
	serviceName: string
):
	| ComprehendBody
	| ComprehendMedicalBody
	| ForecastBody
	| LexBody
	| PersonalizeBody
	| PollyBody
	| RekognitionBody
	| TextractBody
	| TranscribeBody
	| TranslateBody => {
	if (!event.body) {
		throw new Error("No body found on the event");
	}

	try {
		const body = JSON.parse(event.body) as RequestEventBody;

		let selectedServiceBody;
		switch (serviceName) {
			case "comprehend":
				selectedServiceBody = body.comprehend;
				break;
			case "comprehend-medical":
				selectedServiceBody = body.comprehendMedical;
				break;
			case "forecast":
				selectedServiceBody = body.forecast;
				break;
			case "lex":
				selectedServiceBody = body.lex;
				break;
			case "personalize":
				selectedServiceBody = body.personalize;
				break;
			case "polly":
				selectedServiceBody = body.polly;
				break;
			case "rekognition":
				selectedServiceBody = body.rekognition;
				break;
			case "textract":
				selectedServiceBody = body.textract;
				break;
			case "transcribe":
				selectedServiceBody = body.transcribe;
				break;
			case "translate":
				selectedServiceBody = body.translate;
				break;
		}

		if (!selectedServiceBody) {
			throw new Error();
		}
		return selectedServiceBody;
	} catch (error) {
		throw new Error("Unable to parse event body");
	}
};

export const getPathParam = (event: APIGatewayEvent, param: string) => {
	if (!event.pathParameters) {
		throw new Error("No path parameters found on event");
	}

	if (!event.pathParameters.hasOwnProperty(param)) {
		throw new Error(`Path param: ${param} was not found on event path`);
	}

	const requestedParam = event.pathParameters[param];
	return requestedParam;
};

export const getAiServiceParam = (event: APIGatewayEvent) => {
	if (!event.pathParameters) {
		throw new Error(`No Path parameters found on event`);
	}

	if (event.pathParameters[0] && event.pathParameters[0] === "ai") {
		throw new Error(`No AI path parameter found on event`);
	}

	if (!event.pathParameters[1]) {
		throw new Error(`No AI service parameter found on event`);
	}

	return event.pathParameters[1];
};
