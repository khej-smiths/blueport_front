import { graphql } from "../gql";

export const ReadBlogQuery = graphql(`
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
      owner {
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