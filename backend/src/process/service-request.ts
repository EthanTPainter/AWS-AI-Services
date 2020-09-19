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
import { createComprehendBodyRequest } from "../request/comprehend";
import { createComprehendMedicalBodyRequest } from "../request/comprehend-medical";

export const serviceRequest = (
	body:
		| ComprehendBody
		| ComprehendMedicalBody
		| ForecastBody
		| LexBody
		| PersonalizeBody
		| PollyBody
		| RekognitionBody
		| TextractBody
		| TranscribeBody
		| TranslateBody,
	serviceName: string
) => {
	let response;
	switch (serviceName) {
		case "comprehend":
			response = createComprehendBodyRequest(body as ComprehendBody);
			break;
		case "comprehend-medical":
			response = createComprehendMedicalBodyRequest(
				body as ComprehendMedicalBody
			);
			break;
		case "lex":
			break;
		case "personalize":
			break;
		case "polly":
			break;
		case "rekognition":
			break;
		case "textract":
			break;
		case "transcribe":
			break;
		case "translate":
			break;
	}
	return response;
};
