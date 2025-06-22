import { graphql } from "../gql";

export const readResumeQuery = graphql(`
  query ReadResume($input: ReadResumeInputDto!) {
    readResume(input: $input) {
      id
      educationList {
        id
        order
        name
        major
        grade
        description
        graduationStatus
        startAt
        endAt
      }
      careerList {
        id
        order
        company
        department
        position
        description
        startAt
        endAt
      }
      projectList {
        id
        order
        name
        personnel
        skillList
        description
        startAt
        endAt
      }
      portfolioList {
        id
        order
        type
        url
      }
    }
  }
`);
