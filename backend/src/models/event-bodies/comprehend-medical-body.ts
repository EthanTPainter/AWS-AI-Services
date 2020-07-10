import { COMPREHEND_MEDICAL_FUNCTION_TYPES } from "../../../../enums";

export type ComprehendMedicalBody = {
	function: COMPREHEND_MEDICAL_FUNCTION_TYPES;
	text: string;
};
