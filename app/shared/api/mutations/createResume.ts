import { graphql } from "../gql";

export const createResumeMutation = graphql(`
  mutation CreateResume($input: CreateResumeInputDto!) {
    createResume(input: $input) {
      id
    }
  }
`);
