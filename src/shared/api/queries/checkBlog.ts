import { graphql } from "../gql";

export const readUserQuery = graphql(`
  query ReadUser {
    readUser {
      id
      email
      name
      blog {
        ...BlogFields
      }
    }
  }
  
  fragment BlogFields on Blog {
      id
      domain
    }
  `)