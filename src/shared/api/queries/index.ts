import { LoginInputDto } from "../gql/graphql";
import { instance } from "../gql/instance";
import { LoginQuery } from "./login";

export async function login(body: LoginInputDto) {
  return instance(LoginQuery, body);
}
