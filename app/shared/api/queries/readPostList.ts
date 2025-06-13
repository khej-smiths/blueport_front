import { graphql } from "../gql";

export const readPostListQuery = graphql(`
  query ReadPostList($input: ReadPostListInputDto!) {
    readPostList(input: $input) {
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