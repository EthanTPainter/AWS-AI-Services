import { Rekognition } from "aws-sdk";

const rekognitionClient = new Rekognition({
	apiVersion: "2016-06-27",
});

export const detectFaces = async (s3Bucket: string, name: string) => {
	const parameters = {
		Image: {
			S3Object: {
				Bucket: s3Bucket,
				Name: name,
			},
		},
	};

	const response = await rekognitionClient.detectFaces(parameters).promise();

	return response;
};

export const detectLabels = async (
	s3Bucket: string,
	name: string,
	maxLabels?: number,
	minConfidence?: number
) => {
	const parameters = {
		Image: {
			S3Object: {
				Bucket: s3Bucket,
				Name: name,
			},
		},
		MaxLabels: maxLabels,
		MinConfidence: minConfidence,
	};

	const response = await rekognitionClient.detectLabels(parameters).promise();

	return response;
};

export const detectModerationLabels = async (
	s3Bucket: string,
	name: string,
	version: string,
	minConfidence?: number
) => {
	const parameters = {
		Image: {
			S3Object: {
				Bucket: s3Bucket,
				Name: name,
				Version: version,
			},
		},
		MinConfidence: minConfidence,
	};

	const response = await rekognitionClient.detectModerationLabels().promise();

	return response;
};

export const detectText = async (
	s3Bucket: string,
	name: string,
	version: string
) => {
	const parameters = {
		Image: {
			S3Object: {
				Bucket: s3Bucket,
				Name: name,
				Version: version,
			},
		},
	};

	const response = await rekognitionClient.detectText(parameters).promise();

	return response;
};

export const recognizeCelebrity = async (
	s3Bucket: string,
	name: string,
	version: string
) => {
	const parameters = {
		Image: {
			S3Object: {
				Bucket: s3Bucket,
				Name: name,
				Version: version,
			},
		},
	};

	const response = await rekognitionClient
		.recognizeCelebrities(parameters)
		.promise();

	return response;
};

export const getCelebrityInfo = async (celebrityId: string) => {
	const parameters = {
		Id: celebrityId,
	};

	const response = await rekognitionClient
		.getCelebrityInfo(parameters)
		.promise();

	return response;
};
