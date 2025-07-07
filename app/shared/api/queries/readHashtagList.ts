import { graphql } from "../gql";

export const readHashtagListQuery = graphql(`
  query ReadHashtagList {
    readHashtagList
  }
`);
