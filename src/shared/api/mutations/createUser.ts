import { graphql } from "../gql";

export const CreateUserMutation = graphql(`
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
