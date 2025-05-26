import { GetSchoolListRequest } from "../types/open";

export const ROOT_KEY = {
  open: "open-api",
  checkBlog: "check-blog",
};

export const QUERY_KEY = {
  open: {
    getSchoolList: (params?: GetSchoolListRequest) => [
      ROOT_KEY.open,
      "getSchoolList",
      params,
    ],
  },
  checkBlog: () => [ROOT_KEY.checkBlog, "checkBlog"],
};
