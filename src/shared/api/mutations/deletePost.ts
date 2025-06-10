import { graphql } from "../gql";

export const deletePostMutation = graphql(`
  mutation DeletePost($input: DeletePostInputDto!) {
    deletePost(input: $input)
  }`)