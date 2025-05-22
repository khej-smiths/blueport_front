/* eslint-disable */
import * as types from './graphql';



/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "\n  mutation CreateUser($input: CreateUserInputDto!) {\n    createUser(input: $input) {\n      id\n      name\n      email\n      createdAt\n      updatedAt\n    }\n  }\n": typeof types.CreateUserDocument,
    "\n  query Login($input: LoginInputDto!) {\n    login(input: $input)\n  }\n": typeof types.LoginDocument,
};
const documents: Documents = {
    "\n  mutation CreateUser($input: CreateUserInputDto!) {\n    createUser(input: $input) {\n      id\n      name\n      email\n      createdAt\n      updatedAt\n    }\n  }\n": types.CreateUserDocument,
    "\n  query Login($input: LoginInputDto!) {\n    login(input: $input)\n  }\n": types.LoginDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateUser($input: CreateUserInputDto!) {\n    createUser(input: $input) {\n      id\n      name\n      email\n      createdAt\n      updatedAt\n    }\n  }\n"): typeof import('./graphql').CreateUserDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Login($input: LoginInputDto!) {\n    login(input: $input)\n  }\n"): typeof import('./graphql').LoginDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
