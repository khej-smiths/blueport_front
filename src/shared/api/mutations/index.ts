import { CreateUserInputDto } from "../gql/graphql";
import { instance } from "../gql/instance";
import { CreateUserMutation } from "./createUser";

export async function createUser(input: CreateUserInputDto) {
  return await instance(CreateUserMutation, { input });
}
