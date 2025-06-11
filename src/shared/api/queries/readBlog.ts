import { graphql } from "../gql";

export const readBlogQuery = graphql(`
  query ReadBlog($input: ReadBlogInputDto!) {
    readBlog(input: $input) {
      id
      name
      domain
      greeting
      photo
      introduction
      skills
      email
      github
    }
  }
`)