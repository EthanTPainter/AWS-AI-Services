import { COMPREHEND_FUNCTION_TYPES } from "../../../../enums";

export type ComprehendBody = {
	function: COMPREHEND_FUNCTION_TYPES;
	text: string;
	languageCode: string;
};
