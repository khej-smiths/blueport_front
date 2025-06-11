import {
  LoginInputDto,
  LoginQuery,
  ReadBlogInputDto,
  ReadBlogListInputDto,
  ReadBlogListQuery,
  ReadBlogQuery,
  ReadPostInputDto,
  ReadPostListInputDto,
  ReadPostListQuery,
  ReadPostQuery,
  ReadUserQuery,
} from "../gql/graphql";
import { instance } from "../gql/instance";
import { loginQuery } from "./login";
import { readBlogQuery } from "./readBlog";
import { readBlogListQuery } from "./readBlogList";
import { readPostListQuery } from "./readPostList";
import { readUserQuery } from "./readUser";

/** 로그인 */
export async function login(input: LoginInputDto) {
  return await instance<LoginQuery>(loginQuery, { input });
}

/** 자신의 블로그 존재 여부 조회 */
export async function readUser() {
  return await instance<ReadUserQuery>(readUserQuery)
}

/** 단일 게시글 조회 */
export async function readPost(input: ReadPostInputDto) {
  return await instance<ReadPostQuery>(readPost, { input })
}

/** 게시글 목록 조회 */
export async function readPostList(input: ReadPostListInputDto) {
  return await instance<ReadPostListQuery>(readPostListQuery, { input })
}

/** 단일 블로그 조회 */
export async function readBlog(input: ReadBlogInputDto): Promise<ReadBlogQuery> {
  return await instance<ReadBlogQuery>(readBlogQuery, { input })
}

/** 블로그 목록 조회 */
export async function readBlogList(input: ReadBlogListInputDto) {
  return await instance<ReadBlogListQuery>(readBlogListQuery, { input })
}

