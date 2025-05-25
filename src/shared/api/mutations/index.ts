import { CreateBlogInputDto, CreateUserInputDto } from "../gql/graphql";
import { instance } from "../gql/instance";
import { CreateBlogMutation } from "./createBlog";
import { CreateUserMutation } from "./createUser";

export async function createUser(input: CreateUserInputDto) {
  return await instance(CreateUserMutation, { input });
}

export async function createBlog(input: CreateBlogInputDto) {
  return await instance(CreateBlogMutation, {input })
}