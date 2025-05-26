import { graphql } from "../gql";

export const loginQuery = graphql(`
  query Login($input: LoginInputDto!) {
    login(input: $input)
  }
`);
