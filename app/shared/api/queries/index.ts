import {
  LoginInputDto,
  LoginQuery,
  ReadBlogInputDto,
  ReadBlogListInputDto,
  ReadBlogListQuery,
  ReadBlogQuery,
  ReadHashtagListQuery,
  ReadPostInputDto,
  ReadPostListInputDto,
  ReadPostListQuery,
  ReadPostQuery,
  ReadResumeInputDto,
  ReadResumeQuery,
  ReadUserQuery,
} from "../gql/graphql";
import { instance } from "../gql/instance";
import { loginQuery } from "./login";
import { readBlogQuery } from "./readBlog";
import { readBlogListQuery } from "./readBlogList";
import { readPostQuery } from "./readPost";
import { readPostListQuery } from "./readPostList";
import { readUserQuery } from "./readUser";
import { readResumeQuery } from "./readResume";
import { readHashtagListQuery } from "./readHashtagList";

/** 로그인 */
export async function login(input: LoginInputDto) {
  return await instance<LoginQuery>(loginQuery, { input });
}

/** 자신의 블로그 존재 여부 조회 */
export async function readUser() {
  return await instance<ReadUserQuery>(readUserQuery);
}

/** 단일 게시글 조회 */
export async function readPost(input: ReadPostInputDto) {
  return await instance<ReadPostQuery>(readPostQuery, { input });
}

/** 게시글 목록 조회 */
export async function readPostList(input: ReadPostListInputDto) {
  return (await instance<ReadPostListQuery>(readPostListQuery, { input }))
    .readPostList;
}

/** 단일 블로그 조회 */
export async function readBlog(input: ReadBlogInputDto) {
  return (await instance<ReadBlogQuery>(readBlogQuery, { input })).readBlog;
}

/** 블로그 목록 조회 */
export async function readBlogList(input: ReadBlogListInputDto) {
  return (await instance<ReadBlogListQuery>(readBlogListQuery, { input }))
    .readBlogList;
}

/** 이력서 조회 */
export async function readResume(input: ReadResumeInputDto) {
  return await instance<ReadResumeQuery>(readResumeQuery, { input });
}

/** 해시태그 목록 조회 */
export async function readHashtagList() {
  return (await instance<ReadHashtagListQuery>(readHashtagListQuery))
    .readHashtagList;
}
