import { LoginResponseDto } from "@/shared/types/login";

import { LoginInputDto, ReadBlogInputDto } from "../gql/graphql";
import { instance } from "../gql/instance";
import { LoginQuery } from "./login";
import { ReadBlogQuery } from "./readBlog";

export async function login(input: LoginInputDto) {
  return await instance<LoginResponseDto>(LoginQuery, { input });
}

export async function readBlog(input: ReadBlogInputDto) {
  return await instance(ReadBlogQuery, { input })
}