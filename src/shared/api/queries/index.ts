import { LoginResponseDto } from "@/shared/types/login";

import { LoginInputDto } from "../gql/graphql";
import { instance } from "../gql/instance";
import { LoginQuery } from "./login";

export async function login(input: LoginInputDto) {
  return await instance<LoginResponseDto>(LoginQuery, { input });
}
