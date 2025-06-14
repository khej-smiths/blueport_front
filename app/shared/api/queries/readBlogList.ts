import { graphql } from "../gql";

export const readBlogListQuery = graphql(`
  query ReadBlogList($input: ReadBlogListInputDto!) {
    readBlogList(input: $input) {
      id
      name
      domain
      greeting
      photo
      introduction
      skills
      email
      github
      ownerId
    }
  }`)