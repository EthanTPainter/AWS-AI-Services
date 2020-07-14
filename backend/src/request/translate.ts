import { Translate } from "aws-sdk";

const translateClient = new Translate({
	region: "us-east-1",
	apiVersion: "2017-07-01",
});

export const translateText = async (
	sourceLangCode: string,
	targetLangCode: string,
	sourceText: string
): Promise<string> => {
	const parameters = {
		SourceLanguageCode: sourceLangCode,
		TargetLanguageCode: targetLangCode,
		Text: sourceText,
	};

	const response = await translateClient.translateText(parameters).promise();

	return response.TranslatedText;
};
