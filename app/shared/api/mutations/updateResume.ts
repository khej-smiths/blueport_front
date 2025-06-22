import { graphql } from "../gql";

export const updateResumeMutation = graphql(`
  mutation UpdateResume($input: UpdateResumeInputDto!) {
    updateResume(input: $input) {
      id
    }
  }
`);
