import { graphql } from "../gql";

export const updateBlogMutation = graphql(`
  mutation UpdateBlog($input: UpdateBlogInputDto!) {
    updateBlog(input: $input) {
      name
      domain
      greeting
      photo
      introduction
      skills
      email
      github
    }
  }`)