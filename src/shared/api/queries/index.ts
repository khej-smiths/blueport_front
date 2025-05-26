import {
  CheckBlogBySelfQuery,
  LoginInputDto,
  LoginQuery as LoginQueryType,
  ReadBlogInputDto,
} from "../gql/graphql";
import { instance } from "../gql/instance";
import { checkBlogQuery } from "./checkBlog";
import { loginQuery } from "./login";
import { readBlogQuery } from "./readBlog";

export async function login(input: LoginInputDto) {
  return await instance<LoginQueryType>(loginQuery, { input });
}

export async function readBlog(input: ReadBlogInputDto) {
  return await instance(readBlogQuery, { input })
}

export async function checkBlog() {
  return await instance<CheckBlogBySelfQuery>(checkBlogQuery)
}