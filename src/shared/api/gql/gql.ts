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
    "\n  mutation CreateBlog($input: CreateBlogInputDto!) {\n    createBlog(input: $input) {\n      domain\n    }\n  }": typeof types.CreateBlogDocument,
    "\n  mutation CreateUser($input: CreateUserInputDto!) {\n    createUser(input: $input) {\n      id\n      name\n      email\n      createdAt\n      updatedAt\n    }\n  }\n": typeof types.CreateUserDocument,
    "\n  query CheckBlogBySelf {\n    readUser {\n      id\n      email\n      name\n      blog {\n        ...BlogFields\n      }\n    }\n  }\n  \n  fragment BlogFields on Blog {\n      id\n      domain\n    }\n  ": typeof types.CheckBlogBySelfDocument,
    "\n  query Login($input: LoginInputDto!) {\n    login(input: $input)\n  }\n": typeof types.LoginDocument,
    "\n  query ReadBlog($input: ReadBlogInputDto!) {\n    readBlog(input: $input) {\n      id\n      name\n      domain\n      greeting\n      photo\n      introduction\n      skills\n      email\n      github\n      owner {\n        ...UserFields\n      }\n    }\n  }\n\n  fragment UserFields on User {\n    id\n    name\n    email\n  }\n": typeof types.ReadBlogDocument,
};
const documents: Documents = {
    "\n  mutation CreateBlog($input: CreateBlogInputDto!) {\n    createBlog(input: $input) {\n      domain\n    }\n  }": types.CreateBlogDocument,
    "\n  mutation CreateUser($input: CreateUserInputDto!) {\n    createUser(input: $input) {\n      id\n      name\n      email\n      createdAt\n      updatedAt\n    }\n  }\n": types.CreateUserDocument,
    "\n  query CheckBlogBySelf {\n    readUser {\n      id\n      email\n      name\n      blog {\n        ...BlogFields\n      }\n    }\n  }\n  \n  fragment BlogFields on Blog {\n      id\n      domain\n    }\n  ": types.CheckBlogBySelfDocument,
    "\n  query Login($input: LoginInputDto!) {\n    login(input: $input)\n  }\n": types.LoginDocument,
    "\n  query ReadBlog($input: ReadBlogInputDto!) {\n    readBlog(input: $input) {\n      id\n      name\n      domain\n      greeting\n      photo\n      introduction\n      skills\n      email\n      github\n      owner {\n        ...UserFields\n      }\n    }\n  }\n\n  fragment UserFields on User {\n    id\n    name\n    email\n  }\n": types.ReadBlogDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateBlog($input: CreateBlogInputDto!) {\n    createBlog(input: $input) {\n      domain\n    }\n  }"): typeof import('./graphql').CreateBlogDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateUser($input: CreateUserInputDto!) {\n    createUser(input: $input) {\n      id\n      name\n      email\n      createdAt\n      updatedAt\n    }\n  }\n"): typeof import('./graphql').CreateUserDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query CheckBlogBySelf {\n    readUser {\n      id\n      email\n      name\n      blog {\n        ...BlogFields\n      }\n    }\n  }\n  \n  fragment BlogFields on Blog {\n      id\n      domain\n    }\n  "): typeof import('./graphql').CheckBlogBySelfDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Login($input: LoginInputDto!) {\n    login(input: $input)\n  }\n"): typeof import('./graphql').LoginDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query ReadBlog($input: ReadBlogInputDto!) {\n    readBlog(input: $input) {\n      id\n      name\n      domain\n      greeting\n      photo\n      introduction\n      skills\n      email\n      github\n      owner {\n        ...UserFields\n      }\n    }\n  }\n\n  fragment UserFields on User {\n    id\n    name\n    email\n  }\n"): typeof import('./graphql').ReadBlogDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
