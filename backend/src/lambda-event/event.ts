import { APIGatewayEvent } from "aws-lambda";
import { RequestEventBody } from "../models/request-event-body";

export const getBody = (event: APIGatewayEvent): RequestEventBody => {
	if (!event.body) {
		throw new Error("No body found on the event");
	}

	try {
		const body = JSON.parse(event.body);
		return body;
	} catch (error) {
		throw new Error("Unable to parse event body");
	}
};

export const getPathParam = (event: APIGatewayEvent, param: string) => {
	if (!event.pathParameters) {
		throw new Error("No path parameters found on event");
	}

	if (!event.pathParameters.hasOwnProperty(param)) {
		throw new Error(`Path param: ${param} was not found on event path`);
	}

	const requestedParam = event.pathParameters[param];
	return requestedParam;
};

export const getAiServiceParam = (event: APIGatewayEvent) => {
	if (!event.pathParameters) {
		throw new Error(`No Path parameters found on event`);
	}

	if (event.pathParameters[0] && event.pathParameters[0] === "ai") {
		throw new Error(`No AI path parameter found on event`);
	}

	if (!event.pathParameters[1]) {
		throw new Error(`No AI service parameter found on event`);
	}

	return event.pathParameters[1];
};
