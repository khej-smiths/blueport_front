import { GetSchoolListRequest } from "../types/open";

export const ROOT_KEY = {
  open: "open-api",
  user: "user",
  blog: "blog",
};

export const QUERY_KEY = {
  open: {
    getSchoolList: (params?: GetSchoolListRequest) => [
      ROOT_KEY.open,
      "getSchoolList",
      params,
    ],
  },
  user: () => [ROOT_KEY.user, "readUser"],
  blog: (userId?: string) => [ROOT_KEY.blog, "readBlog", userId],
};
