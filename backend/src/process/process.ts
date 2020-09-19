import { APIGatewayEvent } from "aws-lambda";
import { HandlerResult } from "../models/handler-result";
import { getAiServiceParam, getBody } from "../lambda-event/event";
import { serviceRequest } from "./service-request";

export const processEvent = (event: APIGatewayEvent): Promise<HandlerResult> => {
  const serviceName = getAiServiceParam(event);
  const body = getBody(event, serviceName);

  const response = serviceRequest(body, serviceName);
  const result = Promise.resolve({ statusCode: 200, body: undefined });
  return result;
};
