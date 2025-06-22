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
    "\n  mutation CreateBlog($input: CreateBlogInputDto!) {\n    createBlog(input: $input) {\n      name\n      domain\n      greeting\n      photo\n      introduction\n      skills\n      email\n      github\n    }\n  }": typeof types.CreateBlogDocument,
    "\n  mutation CreatePost($input: CreatePostInputDto!) {\n    createPost(input: $input) {\n      id\n      owner {\n        blog {\n          domain\n        }\n      }\n    }\n  }\n": typeof types.CreatePostDocument,
    "\n  mutation CreateResume($input: CreateResumeInputDto!) {\n    createResume(input: $input) {\n      id\n    }\n  }\n": typeof types.CreateResumeDocument,
    "\n  mutation CreateUser($input: CreateUserInputDto!) {\n    createUser(input: $input) {\n      id\n      name\n      email\n      createdAt\n      updatedAt\n    }\n  }\n": typeof types.CreateUserDocument,
    "\n  mutation DeletePost($input: DeletePostInputDto!) {\n    deletePost(input: $input)\n  }": typeof types.DeletePostDocument,
    "\n  mutation UpdateBlog($input: UpdateBlogInputDto!) {\n    updateBlog(input: $input) {\n      name\n      domain\n      greeting\n      photo\n      introduction\n      skills\n      email\n      github\n    }\n  }": typeof types.UpdateBlogDocument,
    "\n  mutation UpdatePost($input: UpdatePostInputDto!) {\n    updatePost(input: $input) {\n      id\n      title\n      content\n      hashtagList\n      owner {\n        blog {\n          domain\n        }\n      }\n    }\n  }": typeof types.UpdatePostDocument,
    "\n  mutation UpdateResume($input: UpdateResumeInputDto!) {\n    updateResume(input: $input) {\n      id\n    }\n  }\n": typeof types.UpdateResumeDocument,
    "\n  mutation UpdateUser($input: UpdateUserInputDto!) {\n    updateUser(input: $input) {\n      name\n      email\n    }\n  }": typeof types.UpdateUserDocument,
    "\n  query Login($input: LoginInputDto!) {\n    login(input: $input)\n  }\n": typeof types.LoginDocument,
    "\n  query ReadBlog($input: ReadBlogInputDto!) {\n    readBlog(input: $input) {\n      id\n      name\n      domain\n      greeting\n      photo\n      introduction\n      skills\n      email\n      github\n      ownerId\n      resumeId\n    }\n  }\n": typeof types.ReadBlogDocument,
    "\n  query ReadBlogList($input: ReadBlogListInputDto!) {\n    readBlogList(input: $input) {\n      id\n      name\n      domain\n      greeting\n      photo\n      introduction\n      skills\n      email\n      github\n      ownerId\n    }\n  }": typeof types.ReadBlogListDocument,
    "\n  query ReadPost($input: ReadPostInputDto!) {\n    readPost(input: $input) {\n      id\n      title\n      content\n      hashtagList\n      createdAt\n      owner {\n        id\n        name\n      }\n    }\n  }\n": typeof types.ReadPostDocument,
    "\n  query ReadPostList($input: ReadPostListInputDto!) {\n    readPostList(input: $input) {\n      id\n      title\n      content\n      hashtagList\n      createdAt\n      owner {\n        id\n        name\n        email\n        blog {\n          id\n          domain\n        }\n      }\n    }\n  }\n": typeof types.ReadPostListDocument,
    "\n  query ReadResume($input: ReadResumeInputDto!) {\n    readResume(input: $input) {\n      id\n      educationList {\n        id\n        order\n        name\n        major\n        grade\n        description\n        graduationStatus\n        startAt\n        endAt\n      }\n      careerList {\n        id\n        order\n        company\n        department\n        position\n        description\n        startAt\n        endAt\n      }\n      projectList {\n        id\n        order\n        name\n        personnel\n        skillList\n        description\n        startAt\n        endAt\n      }\n      portfolioList {\n        id\n        order\n        type\n        url\n      }\n    }\n  }\n": typeof types.ReadResumeDocument,
    "\n  query ReadUser {\n    readUser {\n      id\n      email\n      name\n      blog {\n        id\n      }\n    }\n  }\n": typeof types.ReadUserDocument,
};
const documents: Documents = {
    "\n  mutation CreateBlog($input: CreateBlogInputDto!) {\n    createBlog(input: $input) {\n      name\n      domain\n      greeting\n      photo\n      introduction\n      skills\n      email\n      github\n    }\n  }": types.CreateBlogDocument,
    "\n  mutation CreatePost($input: CreatePostInputDto!) {\n    createPost(input: $input) {\n      id\n      owner {\n        blog {\n          domain\n        }\n      }\n    }\n  }\n": types.CreatePostDocument,
    "\n  mutation CreateResume($input: CreateResumeInputDto!) {\n    createResume(input: $input) {\n      id\n    }\n  }\n": types.CreateResumeDocument,
    "\n  mutation CreateUser($input: CreateUserInputDto!) {\n    createUser(input: $input) {\n      id\n      name\n      email\n      createdAt\n      updatedAt\n    }\n  }\n": types.CreateUserDocument,
    "\n  mutation DeletePost($input: DeletePostInputDto!) {\n    deletePost(input: $input)\n  }": types.DeletePostDocument,
    "\n  mutation UpdateBlog($input: UpdateBlogInputDto!) {\n    updateBlog(input: $input) {\n      name\n      domain\n      greeting\n      photo\n      introduction\n      skills\n      email\n      github\n    }\n  }": types.UpdateBlogDocument,
    "\n  mutation UpdatePost($input: UpdatePostInputDto!) {\n    updatePost(input: $input) {\n      id\n      title\n      content\n      hashtagList\n      owner {\n        blog {\n          domain\n        }\n      }\n    }\n  }": types.UpdatePostDocument,
    "\n  mutation UpdateResume($input: UpdateResumeInputDto!) {\n    updateResume(input: $input) {\n      id\n    }\n  }\n": types.UpdateResumeDocument,
    "\n  mutation UpdateUser($input: UpdateUserInputDto!) {\n    updateUser(input: $input) {\n      name\n      email\n    }\n  }": types.UpdateUserDocument,
    "\n  query Login($input: LoginInputDto!) {\n    login(input: $input)\n  }\n": types.LoginDocument,
    "\n  query ReadBlog($input: ReadBlogInputDto!) {\n    readBlog(input: $input) {\n      id\n      name\n      domain\n      greeting\n      photo\n      introduction\n      skills\n      email\n      github\n      ownerId\n      resumeId\n    }\n  }\n": types.ReadBlogDocument,
    "\n  query ReadBlogList($input: ReadBlogListInputDto!) {\n    readBlogList(input: $input) {\n      id\n      name\n      domain\n      greeting\n      photo\n      introduction\n      skills\n      email\n      github\n      ownerId\n    }\n  }": types.ReadBlogListDocument,
    "\n  query ReadPost($input: ReadPostInputDto!) {\n    readPost(input: $input) {\n      id\n      title\n      content\n      hashtagList\n      createdAt\n      owner {\n        id\n        name\n      }\n    }\n  }\n": types.ReadPostDocument,
    "\n  query ReadPostList($input: ReadPostListInputDto!) {\n    readPostList(input: $input) {\n      id\n      title\n      content\n      hashtagList\n      createdAt\n      owner {\n        id\n        name\n        email\n        blog {\n          id\n          domain\n        }\n      }\n    }\n  }\n": types.ReadPostListDocument,
    "\n  query ReadResume($input: ReadResumeInputDto!) {\n    readResume(input: $input) {\n      id\n      educationList {\n        id\n        order\n        name\n        major\n        grade\n        description\n        graduationStatus\n        startAt\n        endAt\n      }\n      careerList {\n        id\n        order\n        company\n        department\n        position\n        description\n        startAt\n        endAt\n      }\n      projectList {\n        id\n        order\n        name\n        personnel\n        skillList\n        description\n        startAt\n        endAt\n      }\n      portfolioList {\n        id\n        order\n        type\n        url\n      }\n    }\n  }\n": types.ReadResumeDocument,
    "\n  query ReadUser {\n    readUser {\n      id\n      email\n      name\n      blog {\n        id\n      }\n    }\n  }\n": types.ReadUserDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateBlog($input: CreateBlogInputDto!) {\n    createBlog(input: $input) {\n      name\n      domain\n      greeting\n      photo\n      introduction\n      skills\n      email\n      github\n    }\n  }"): typeof import('./graphql').CreateBlogDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreatePost($input: CreatePostInputDto!) {\n    createPost(input: $input) {\n      id\n      owner {\n        blog {\n          domain\n        }\n      }\n    }\n  }\n"): typeof import('./graphql').CreatePostDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateResume($input: CreateResumeInputDto!) {\n    createResume(input: $input) {\n      id\n    }\n  }\n"): typeof import('./graphql').CreateResumeDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation CreateUser($input: CreateUserInputDto!) {\n    createUser(input: $input) {\n      id\n      name\n      email\n      createdAt\n      updatedAt\n    }\n  }\n"): typeof import('./graphql').CreateUserDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation DeletePost($input: DeletePostInputDto!) {\n    deletePost(input: $input)\n  }"): typeof import('./graphql').DeletePostDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateBlog($input: UpdateBlogInputDto!) {\n    updateBlog(input: $input) {\n      name\n      domain\n      greeting\n      photo\n      introduction\n      skills\n      email\n      github\n    }\n  }"): typeof import('./graphql').UpdateBlogDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdatePost($input: UpdatePostInputDto!) {\n    updatePost(input: $input) {\n      id\n      title\n      content\n      hashtagList\n      owner {\n        blog {\n          domain\n        }\n      }\n    }\n  }"): typeof import('./graphql').UpdatePostDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateResume($input: UpdateResumeInputDto!) {\n    updateResume(input: $input) {\n      id\n    }\n  }\n"): typeof import('./graphql').UpdateResumeDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation UpdateUser($input: UpdateUserInputDto!) {\n    updateUser(input: $input) {\n      name\n      email\n    }\n  }"): typeof import('./graphql').UpdateUserDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Login($input: LoginInputDto!) {\n    login(input: $input)\n  }\n"): typeof import('./graphql').LoginDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query ReadBlog($input: ReadBlogInputDto!) {\n    readBlog(input: $input) {\n      id\n      name\n      domain\n      greeting\n      photo\n      introduction\n      skills\n      email\n      github\n      ownerId\n      resumeId\n    }\n  }\n"): typeof import('./graphql').ReadBlogDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query ReadBlogList($input: ReadBlogListInputDto!) {\n    readBlogList(input: $input) {\n      id\n      name\n      domain\n      greeting\n      photo\n      introduction\n      skills\n      email\n      github\n      ownerId\n    }\n  }"): typeof import('./graphql').ReadBlogListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query ReadPost($input: ReadPostInputDto!) {\n    readPost(input: $input) {\n      id\n      title\n      content\n      hashtagList\n      createdAt\n      owner {\n        id\n        name\n      }\n    }\n  }\n"): typeof import('./graphql').ReadPostDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query ReadPostList($input: ReadPostListInputDto!) {\n    readPostList(input: $input) {\n      id\n      title\n      content\n      hashtagList\n      createdAt\n      owner {\n        id\n        name\n        email\n        blog {\n          id\n          domain\n        }\n      }\n    }\n  }\n"): typeof import('./graphql').ReadPostListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query ReadResume($input: ReadResumeInputDto!) {\n    readResume(input: $input) {\n      id\n      educationList {\n        id\n        order\n        name\n        major\n        grade\n        description\n        graduationStatus\n        startAt\n        endAt\n      }\n      careerList {\n        id\n        order\n        company\n        department\n        position\n        description\n        startAt\n        endAt\n      }\n      projectList {\n        id\n        order\n        name\n        personnel\n        skillList\n        description\n        startAt\n        endAt\n      }\n      portfolioList {\n        id\n        order\n        type\n        url\n      }\n    }\n  }\n"): typeof import('./graphql').ReadResumeDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query ReadUser {\n    readUser {\n      id\n      email\n      name\n      blog {\n        id\n      }\n    }\n  }\n"): typeof import('./graphql').ReadUserDocument;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
