import {
	ComprehendBody,
	ComprehendMedicalBody,
	LexBody,
	ForecastBody,
	PersonalizeBody,
	PollyBody,
	RekognitionBody,
	TextractBody,
	TranscribeBody,
	TranslateBody,
} from "./event-bodies";

export type RequestEventBody = {
	comprehend?: ComprehendBody;
	comprehendMedical?: ComprehendMedicalBody;
	forecast?: ForecastBody;
	lex?: LexBody;
	personalize?: PersonalizeBody;
	polly?: PollyBody;
	rekognition?: RekognitionBody;
	textract?: TextractBody;
	transcribe?: TranscribeBody;
	translate?: TranslateBody;
};
