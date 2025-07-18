import { graphql } from "../gql";

export const readPostQuery = graphql(`
  query ReadPost($input: ReadPostInputDto!) {
    readPost(input: $input) {
      id
      title
      content
      hashtagList
      createdAt
      owner {
        id
        name
      }
    }
  }
`);
