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
  return await instance<LoginQuery>(null, loginQuery, { input });
}

/** 자신의 블로그 존재 여부 조회 */
export async function readUser(accessToken: string | null) {
  return await instance<ReadUserQuery>(accessToken, readUserQuery);
}

/** 단일 게시글 조회 */
export async function readPost(
  accessToken: string | null,
  input: ReadPostInputDto
) {
  return (await instance<ReadPostQuery>(accessToken, readPostQuery, { input }))
    .readPost;
}

/** 게시글 목록 조회 */
export async function readPostList(
  accessToken: string | null,
  input: ReadPostListInputDto
) {
  return (
    await instance<ReadPostListQuery>(accessToken, readPostListQuery, { input })
  ).readPostList;
}

/** 단일 블로그 조회 */
export async function readBlog(
  accessToken: string | null,
  input: ReadBlogInputDto
) {
  return (await instance<ReadBlogQuery>(accessToken, readBlogQuery, { input }))
    .readBlog;
}

/** 블로그 목록 조회 */
export async function readBlogList(
  accessToken: string | null,
  input: ReadBlogListInputDto
) {
  return (
    await instance<ReadBlogListQuery>(accessToken, readBlogListQuery, { input })
  ).readBlogList;
}

/** 이력서 조회 */
export async function readResume(
  accessToken: string | null,
  input: ReadResumeInputDto
) {
  return (
    await instance<ReadResumeQuery>(accessToken, readResumeQuery, { input })
  ).readResume;
}

/** 해시태그 목록 조회 */
export async function readHashtagList(accessToken: string | null) {
  return (
    await instance<ReadHashtagListQuery>(accessToken, readHashtagListQuery)
  ).readHashtagList;
}
