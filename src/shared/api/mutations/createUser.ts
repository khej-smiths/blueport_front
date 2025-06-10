import { graphql } from "../gql";

export const createUserMutation = graphql(`
  mutation CreateUser($input: CreateUserInputDto!) {
    createUser(input: $input) {
      id
      name
      email
      createdAt
      updatedAt
    }
  }
`);
