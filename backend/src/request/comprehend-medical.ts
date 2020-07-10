import { ComprehendMedical } from "aws-sdk";
import { ComprehendMedicalBody } from "models/event-bodies";
import { COMPREHEND_MEDICAL_FUNCTION_TYPES } from "../../../enums";

type DetectMedicalEntitiesType = {
	entities: ComprehendMedical.Entity[];
	otherAttributes?: ComprehendMedical.UnmappedAttribute[];
	paginationToken?: string;
};

type DetectMedicalPhiType = {
	entities: ComprehendMedical.Entity[];
	modelVersion: string;
	paginationToken?: string;
};

const comprehendMedicalClient = new ComprehendMedical({
	apiVersion: "2018-10-30",
});

export const createComprehendMedicalBodyRequest = (
	body: ComprehendMedicalBody
) => {
	let response;
	switch (body.function) {
		case COMPREHEND_MEDICAL_FUNCTION_TYPES.DETECT_ENTITIES:
			response = detectMedicalEntities(body.text);
			break;
		case COMPREHEND_MEDICAL_FUNCTION_TYPES.DETECT_PHI:
			response = detectPHI(body.text);
			break;
	}
	return response;
};

export const detectMedicalEntities = async (
	text: string
): Promise<DetectMedicalEntitiesType> => {
	const parameters = {
		Text: text,
	};

	const response = await comprehendMedicalClient
		.detectEntitiesV2(parameters)
		.promise();

	return {
		entities: response.Entities,
		otherAttributes: response.UnmappedAttributes
			? response.UnmappedAttributes
			: undefined,
		paginationToken: response.PaginationToken
			? response.PaginationToken
			: undefined,
	};
};

export const detectPHI = async (
	text: string
): Promise<DetectMedicalPhiType> => {
	const parameters = {
		Text: text,
	};

	const response = await comprehendMedicalClient
		.detectPHI(parameters)
		.promise();

	return {
		entities: response.Entities,
		modelVersion: response.ModelVersion,
		paginationToken: response.PaginationToken
			? response.PaginationToken
			: undefined,
	};
};
