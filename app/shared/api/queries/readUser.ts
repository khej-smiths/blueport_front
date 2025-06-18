import { graphql } from "../gql";

export const readUserQuery = graphql(`
  query ReadUser {
    readUser {
      id
      email
      name
      blog {
        id
      }
    }
  }
`);
