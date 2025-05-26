import { graphql } from "../gql";

export const checkBlogQuery = graphql(`
  query CheckBlogBySelf {
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