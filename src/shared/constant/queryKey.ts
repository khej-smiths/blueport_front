import { GetSchoolListRequest } from "../types/open";

export const ROOT_KEY = {
  open: "open-api",
  readUser: "read-user",
};

export const QUERY_KEY = {
  open: {
    getSchoolList: (params?: GetSchoolListRequest) => [
      ROOT_KEY.open,
      "getSchoolList",
      params,
    ],
  },
  readUser: () => [ROOT_KEY.readUser, "readUser"],
};
