import { graphql } from "../gql";

export const readPostListQuery = graphql(`
  query ReadPostList($input: ReadPostListInputDto!) {
    readPostList(input: $input) {
      id
      title
      content
      hashtagList
      createdAt
      owner {
        id
        name
        email
        blog {
          id
          domain
        }
      }
    }
  }
`);
