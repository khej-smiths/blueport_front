import { graphql } from "../gql";

export const readPost = graphql(`
  query ReadPost($input: ReadPostInputDto!) {
    readPost(input: $input) {
      id
      title
      content
      hashtagList
      writer {
        ...UserFields
      }
    }
  }
  
  fragment UserFields on User {
    id
    name
    email
  }
  `)