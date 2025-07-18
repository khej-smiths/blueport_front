import { graphql } from "../gql";

export const readResumeQuery = graphql(`
  query ReadResume($input: ReadResumeInputDto!) {
    readResume(input: $input) {
      id
      owner {
        name
        email
      }
      educationList {
        order
        name
        major
        grade
        standardGrade
        graduationStatus
        startAt
        endAt
      }
      careerList {
        order
        company
        department
        position
        description
        startAt
        endAt
      }
      projectList {
        order
        name
        personnel
        skillList
        description
        startAt
        endAt
      }
      portfolioList {
        order
        url
      }
    }
  }
`);
