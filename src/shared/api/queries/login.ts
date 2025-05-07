import { graphql } from "../gql";

export const LoginQuery = graphql(`
  query Login($input: LoginInputDto!) {
    login(input: $input)
  }
`);
