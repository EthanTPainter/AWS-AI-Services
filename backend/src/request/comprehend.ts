import { Comprehend } from "aws-sdk";
import { ComprehendBody } from "models/event-bodies";
import { COMPREHEND_FUNCTION_TYPES } from "../../../enums";

type SentimentType = {
	sentiment: any;
	sentimentScore: any;
};

const comprehendClient = new Comprehend({
	region: "us-east-1",
	apiVersion: "2017-11-27",
});

export const createComprehendBodyRequest = (body: ComprehendBody) => {
	let response;
	switch (body.function) {
		case COMPREHEND_FUNCTION_TYPES.DETECT_ENTITIES:
			response = detectEntities(body.text, body.languageCode);
			break;
		case COMPREHEND_FUNCTION_TYPES.DETECT_KEY_PHRASES:
			response = detectKeyPhrases(body.text, body.languageCode);
			break;
		case COMPREHEND_FUNCTION_TYPES.DETECT_LANGUAGE:
			response = detectLanguage(body.text, body.languageCode);
			break;
		case COMPREHEND_FUNCTION_TYPES.DETECT_SENTIMENT:
			response = detectSentiment(body.text, body.languageCode);
			break;
		case COMPREHEND_FUNCTION_TYPES.DETECT_SYNTAX:
			response = detectSyntax(body.text, body.languageCode);
			break;
	}
	return response;
};

export const detectEntities = async (text: string, languageCode: string) => {
	const parameters = {
		LanguageCode: languageCode,
		Text: text,
	};

	const response = await comprehendClient.detectEntities(parameters).promise();

	return response.Entities;
};

export const detectKeyPhrases = async (text: string, languageCode: string) => {
	const parameters = {
		LanguageCode: languageCode,
		Text: text,
	};

	const response = await comprehendClient
		.detectKeyPhrases(parameters)
		.promise();

	return response.KeyPhrases;
};

export const detectLanguage = async (text: string, languageCode: string) => {
	const parameters = {
		LanguageCode: languageCode,
		Text: text,
	};

	const response = await comprehendClient
		.detectDominantLanguage(parameters)
		.promise();

	return response.Languages;
};

export const detectSentiment = async (
	text: string,
	languageCode: string
): Promise<SentimentType> => {
	const parameters = {
		LanguageCode: languageCode,
		Text: text,
	};

	const response = await comprehendClient.detectSentiment(parameters).promise();

	return {
		sentiment: response.Sentiment,
		sentimentScore: response.SentimentScore,
	};
};

export const detectSyntax = async (text: string, languageCode: string) => {
	const parameters = {
		LanguageCode: languageCode,
		Text: text,
	};

	const response = await comprehendClient.detectSyntax(parameters).promise();

	return response.SyntaxTokens;
};
