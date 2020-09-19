import { ForecastService } from "aws-sdk";

type ListDatasetType = {
  list?: ForecastService.Datasets;
  token?: string;
};

const forecastClient = new ForecastService({
	region: "us-east-1",
	apiVersion: "2018-06-26",
});

export const createDataset = async (
	datasetName: string,
	datasetType: string,
	domain: string
) => {
	const parameters = {
		DatasetName: datasetName,
		DatasetType: datasetType,
		Domain: domain,
		Schema: {
			Attributes: [],
		},
	};

	const response = await forecastClient.createDataset(parameters).promise();

	return response.DatasetArn;
};

export const listDataset = async (numResults: number) => {
	const parameters = {
		MaxResults: numResults,
	};

	const response = await forecastClient.listDatasets(parameters).promise();

	return {
		list: response.Datasets ? response.Datasets : undefined,
		token: response.NextToken ? response.NextToken : undefined,
	};
};

export const createDatasetGroup = async () => {};

export const createForecast = async () => {};

export const listForecasts = async () => {};

export const createPredictor = async () => {};
