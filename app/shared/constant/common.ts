import { Graduation_Status } from "../api/gql/graphql";

export const GraduationStatusMapper: Record<Graduation_Status, string> = {
  [Graduation_Status.Graduated]: "졸업",
  [Graduation_Status.Enrolled]: "재학중",
  [Graduation_Status.ExpectedGraduation]: "졸업 예정",
};
