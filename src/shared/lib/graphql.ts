import { GraphQLClient } from "graphql-request";

export const graphql = new GraphQLClient(
  process.env.NEXT_PUBLIC_API_ENDPOINT ?? ""
);