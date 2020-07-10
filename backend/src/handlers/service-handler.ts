import * as AWS from "aws-sdk";
import { APIGatewayEvent, Callback, Context } from "aws-lambda";
import { processEvent } from "../process/process";
import { HandlerResult } from "../models/handler-result";

/**
 * This handles aws ai service requests
 * @param event API Gateway Event
 * @param context Lambda Context
 * @param callback Lambda Callback
 */
export async function handleServiceRequest(
	event: APIGatewayEvent,
	context: Context,
	callback: Callback
): Promise<HandlerResult> {
	const result = processEvent(event);
	return result;
}
