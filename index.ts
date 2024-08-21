import { APIGatewayProxyEvent, APIGatewayProxyResultV2, Handler } from 'aws-lambda';
import * as _ from 'lodash';
import * as qs from 'qs';

export const handler: Handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResultV2> => {
  const max = 999;
  const val = _.random(max);

  // Parse the query string from the event
  const parsedQuery = qs.parse(event.queryStringParameters);

  const response = {
    statusCode: 200,
    body: `The random value (max ${max}) is: ${val}, Parsed Query: ${JSON.stringify(parsedQuery)}`,
  };
  return response;
};
