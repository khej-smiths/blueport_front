import { graphql } from "../gql";

export const createBlogMutation = graphql(`
  mutation CreateBlog($input: CreateBlogInputDto!) {
    createBlog(input: $input) {
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