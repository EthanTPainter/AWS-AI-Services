import { Textract } from "aws-sdk";

const textractClient = new Textract({
	apiVersion: "2018-06-27",
});

export const analyzeDocument = async (
	s3Bucket: string,
	documentName: string,
	version: string
) => {
	const parameters = {
		Document: {
			S3Object: {
				Bucket: s3Bucket,
				name: documentName,
				Version: version,
			},
		},
	};

	const result = await textractClient.analyzeDocument().promise();

	return result;
};
