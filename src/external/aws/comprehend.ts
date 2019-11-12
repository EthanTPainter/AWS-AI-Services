import { Comprehend } from "aws-sdk";

type SentimentType = {
	sentiment: any;
	sentimentScore: any;
};

export const detectEntities = async (text: string, languageCode: string) => {
	const parameters = {
		LanguageCode: languageCode,
		Text: text,
	};

	const comprehendClient = new Comprehend({ apiVersion: "2017-11-27" });
	const response = await comprehendClient.detectEntities(parameters).promise();

	return response.Entities;
};

export const detectKeyPhrases = async (text: string, languageCode: string) => {
	const parameters = {
		LanguageCode: languageCode,
		Text: text,
	};

	const comprehendClient = new Comprehend({ apiVersion: "2017-11-27" });
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

	const comprehendClient = new Comprehend({ apiVersion: "2017-11-27" });
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

	const comprehendClient = new Comprehend({ apiVersion: "2017-11-27" });
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

	const comprehendClient = new Comprehend({ apiVersion: "2017-11-27" });
	const response = await comprehendClient.detectSyntax(parameters).promise();

	return response.SyntaxTokens;
};
