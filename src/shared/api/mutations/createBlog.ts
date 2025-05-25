import { graphql } from "../gql";

export const CreateBlogMutation = graphql(`
  mutation CreateBlog($input: CreateBlogInputDto!) {
    createBlog(input: $input) {
      domain
    }
  }`)