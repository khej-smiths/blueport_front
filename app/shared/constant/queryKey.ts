import { ReadPostListInputDto, ReadResumeInputDto } from "../api/gql/graphql";
import { Pagination } from "../types/common";
import { GetSchoolListRequest } from "../types/open";

export const ROOT_KEY = {
  open: "open-api",
  user: "user",
  blog: "blog",
  post: "post",
  resume: "resume",
  hashtag: "hashtag",
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
    readUser: () => [ROOT_KEY.user, "readUser"],
  },
  blog: {
    readBlog: (domain?: string) => [ROOT_KEY.blog, "readBlog", domain],
    readBlogList: (pagination?: Pagination) => [
      ROOT_KEY.blog,
      "readBlogList",
      pagination,
    ],
  },
  post: {
    readPostList: (params?: ReadPostListInputDto) => [
      ROOT_KEY.post,
      "readPostList",
      params,
    ],
    readPost: (id?: string | null) => [ROOT_KEY.post, "readPost", id],
  },
  resume: {
    readResume: (params?: ReadResumeInputDto) => [
      ROOT_KEY.resume,
      "readResume",
      params,
    ],
  },
  hashtag: {
    readHashtagList: () => [ROOT_KEY.hashtag, "readHashtagList"],
  },
};
