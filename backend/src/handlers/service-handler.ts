import * as AWS from "aws-sdk";
import { APIGatewayEvent, Callback, Context } from "aws-lambda";

/**
 * This handles aws ai service requests
 * @param event
 * @param context
 * @param callback
 */
export async function handleServiceRequest(
	event: APIGatewayEvent,
	context: Context,
	callback: Callback
): Promise<any> {
	return {
		statusCode: 200,
		body: JSON.stringify({ message: "Success" }),
	};
}
