import { ComprehendMedical } from "aws-sdk";

type DetectMedicalEntitiesType = {
	entities: ComprehendMedical.Entity[];
	otherAttributes?: ComprehendMedical.UnmappedAttribute[];
	paginationToken?: string;
};

export const detectMedicalEntities = async (
	text: string
): Promise<DetectMedicalEntitiesType> => {
	const parameters = {
		Text: text,
	};

	const comprehendMedicalClient = new ComprehendMedical({
		apiVersion: "2018-10-30",
	});
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
