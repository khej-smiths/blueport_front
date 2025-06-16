import { Pagination } from "../types/common";
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
  user: {
    readUser: () => [ROOT_KEY.user, "readUser"]
  },
  blog: {
    readBlog: (domain?: string) => [ROOT_KEY.blog, "readBlog", domain],
    readBlogList: (pagination?: Pagination) => [ROOT_KEY.blog, "readBlogList", pagination]
  }
};
