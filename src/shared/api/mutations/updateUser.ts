import { graphql } from "../gql";

export const updateUserMutation = graphql(`
  mutation UpdateUser($input: UpdateUserInputDto!) {
    updateUser(input: $input) {
      name
      email
    }
  }`)