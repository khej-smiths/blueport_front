import { graphql } from "../gql";

export const updatePostMutation = graphql(`
  mutation UpdatePost($input: UpdatePostInputDto!) {
    updatePost(input: $input) {
      id
      title
      content
      hashtagList
      writer {
        blog {
          domain
        }
      }
    }
  }`)
