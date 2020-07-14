import { TranscribeService } from "aws-sdk";

const transcribeClient = new TranscribeService({
	region: "us-east-1",
	apiVersion: "2017-10-26",
});

export const startTranscriptionJob = async (
	langCode: string,
	mediaUrl: string,
	transcriptionJobName: string
) => {
	const parameters = {
		LanguageCode: langCode,
		Media: {
			MediaFileUri: mediaUrl,
		},
		TranscriptionJobName: transcriptionJobName,
	};

	await transcribeClient.startTranscriptionJob(parameters).promise();
};
