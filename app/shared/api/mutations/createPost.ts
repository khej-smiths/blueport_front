import { graphql } from "../gql";
export const createPostMutation = graphql(`
  mutation CreatePost($input: CreatePostInputDto!) {
    createPost(input: $input) {
      id
      writer {
        blog {
          domain
        }
      }
    }
  }
`);