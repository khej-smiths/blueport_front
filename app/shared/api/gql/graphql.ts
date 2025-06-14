/* eslint-disable */
import type { DocumentTypeDecoration } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
};

export type Blog = {
  __typename?: 'Blog';
  /** 데이터의 생성 날짜 */
  createdAt: Scalars['DateTime']['output'];
  /** 데이터의 삭제 날짜(soft) */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** 도메인, 50자 내외 */
  domain: Scalars['String']['output'];
  /** 이메일 */
  email?: Maybe<Scalars['String']['output']>;
  /** github 링크 */
  github?: Maybe<Scalars['String']['output']>;
  /** 인사말 */
  greeting: Scalars['String']['output'];
  /** id */
  id: Scalars['String']['output'];
  /** 자기소개 */
  introduction: Scalars['String']['output'];
  /** 블로그 이름 */
  name: Scalars['String']['output'];
  /** 블로그 주인 전체 정보 */
  owner: User;
  /** 블로그 주인의 id */
  ownerId: Scalars['String']['output'];
  /** 프로필 사진 */
  photo: Scalars['String']['output'];
  /** 기술 스택, 100개 제한 */
  skills?: Maybe<Array<Scalars['String']['output']>>;
  /** 데이터의 업데이트 날짜 */
  updatedAt: Scalars['DateTime']['output'];
};

export type CreateBlogInputDto = {
  /** 도메인, 50자 내외 */
  domain: Scalars['String']['input'];
  /** 이메일 */
  email?: InputMaybe<Scalars['String']['input']>;
  /** github 링크 */
  github?: InputMaybe<Scalars['String']['input']>;
  /** 인사말 */
  greeting: Scalars['String']['input'];
  /** 자기소개 */
  introduction: Scalars['String']['input'];
  /** 블로그 이름 */
  name: Scalars['String']['input'];
  /** 프로필 사진 */
  photo: Scalars['String']['input'];
  /** 기술 스택, 100개 제한 */
  skills?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type CreatePostInputDto = {
  /** 게시글 내용 */
  content: Scalars['String']['input'];
  /** 게시글의 해시태그 */
  hashtagList?: InputMaybe<Array<Scalars['String']['input']>>;
  /** 게시글의 제목 */
  title: Scalars['String']['input'];
};

export type CreateUserInputDto = {
  /** 유저의 이메일 */
  email: Scalars['String']['input'];
  /** 유저의 이름 */
  name: Scalars['String']['input'];
  /** 유저의 비밀번호 */
  password: Scalars['String']['input'];
};

export type DeletePostInputDto = {
  /** id */
  id: Scalars['String']['input'];
};

export type LoginInputDto = {
  /** 유저의 이메일 */
  email: Scalars['String']['input'];
  /** 유저의 비밀번호 */
  password: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /** 블로그 생성 */
  createBlog: Blog;
  /** 게시글 작성하기, 로그인 유저만 게시글 작성 가능 */
  createPost: Post;
  /** 유저 생성 */
  createUser: User;
  /** 게시글 삭제하기 */
  deletePost: Scalars['Boolean']['output'];
  /** 블로그 수정 */
  updateBlog: Blog;
  /** 게시글 수정하기 */
  updatePost: Post;
  /** 유저 업데이트 */
  updateUser: User;
};


export type MutationCreateBlogArgs = {
  input: CreateBlogInputDto;
};


export type MutationCreatePostArgs = {
  input: CreatePostInputDto;
};


export type MutationCreateUserArgs = {
  input: CreateUserInputDto;
};


export type MutationDeletePostArgs = {
  input: DeletePostInputDto;
};


export type MutationUpdateBlogArgs = {
  input: UpdateBlogInputDto;
};


export type MutationUpdatePostArgs = {
  input: UpdatePostInputDto;
};


export type MutationUpdateUserArgs = {
  input: UpdateUserInputDto;
};

export type Post = {
  __typename?: 'Post';
  /** 게시글 내용 */
  content: Scalars['String']['output'];
  /** 데이터의 생성 날짜 */
  createdAt: Scalars['DateTime']['output'];
  /** 데이터의 삭제 날짜(soft) */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** 게시글의 해시태그 */
  hashtagList?: Maybe<Array<Scalars['String']['output']>>;
  /** id */
  id: Scalars['String']['output'];
  /** 게시글의 제목 */
  title: Scalars['String']['output'];
  /** 데이터의 업데이트 날짜 */
  updatedAt: Scalars['DateTime']['output'];
  /** 조회수 */
  viewCount: Scalars['Int']['output'];
  /** 게시글 작성자 */
  writer: User;
};

export type Query = {
  __typename?: 'Query';
  login: Scalars['String']['output'];
  /** 블로그 조회 */
  readBlog: Blog;
  /** 블로그 목록 조회 */
  readBlogList: Array<Blog>;
  /** 게시글 조회하기 */
  readPost: Post;
  /** 게시글 목록 조회하기 */
  readPostList: Array<Post>;
  /** 유저 정보 가져오기(현재는 본인의 정보만) */
  readUser: User;
};


export type QueryLoginArgs = {
  input: LoginInputDto;
};


export type QueryReadBlogArgs = {
  input: ReadBlogInputDto;
};


export type QueryReadBlogListArgs = {
  input: ReadBlogListInputDto;
};


export type QueryReadPostArgs = {
  input: ReadPostInputDto;
};


export type QueryReadPostListArgs = {
  input: ReadPostListInputDto;
};

export type ReadBlogInputDto = {
  /** id */
  id?: InputMaybe<Scalars['String']['input']>;
  /** 블로그 주인의 id */
  ownerId?: InputMaybe<Scalars['String']['input']>;
};

export type ReadBlogListInputDto = {
  /** 페이지 당 자료의 개수 */
  limit?: Scalars['Int']['input'];
  /** 페이지 번호 */
  pageNumber?: Scalars['Int']['input'];
};

export type ReadPostInputDto = {
  /** id */
  id: Scalars['String']['input'];
};

export type ReadPostListInputDto = {
  /** 조회할 블로그의 id, 없는 경우 전체 게시글을 기준으로 조회된다. */
  blogId?: InputMaybe<Scalars['String']['input']>;
  /** 페이지 당 자료의 개수 */
  limit?: Scalars['Int']['input'];
  /** 페이지 번호 */
  pageNumber?: Scalars['Int']['input'];
  /** 정렬조건 */
  sortOption?: Sort_Option;
};

export enum Sort_Option {
  Newest = 'NEWEST',
  ViewCount = 'VIEW_COUNT'
}

export type UpdateBlogInputDto = {
  /** 도메인, 50자 내외 */
  domain?: InputMaybe<Scalars['String']['input']>;
  /** 이메일 */
  email?: InputMaybe<Scalars['String']['input']>;
  /** github 링크 */
  github?: InputMaybe<Scalars['String']['input']>;
  /** 인사말 */
  greeting?: InputMaybe<Scalars['String']['input']>;
  /** 자기소개 */
  introduction?: InputMaybe<Scalars['String']['input']>;
  /** 블로그 이름 */
  name?: InputMaybe<Scalars['String']['input']>;
  /** 프로필 사진 */
  photo?: InputMaybe<Scalars['String']['input']>;
  /** 기술 스택, 100개 제한 */
  skills?: InputMaybe<Array<Scalars['String']['input']>>;
};

export type UpdatePostInputDto = {
  /** 게시글 내용 */
  content?: InputMaybe<Scalars['String']['input']>;
  /** 게시글의 해시태그 */
  hashtagList?: InputMaybe<Array<Scalars['String']['input']>>;
  /** id */
  id: Scalars['String']['input'];
  /** 게시글의 제목 */
  title?: InputMaybe<Scalars['String']['input']>;
};

export type UpdateUserInputDto = {
  /** 유저의 이름 */
  name?: InputMaybe<Scalars['String']['input']>;
  /** 유저의 비밀번호 */
  password?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  blog?: Maybe<Blog>;
  /** 데이터의 생성 날짜 */
  createdAt: Scalars['DateTime']['output'];
  /** 데이터의 삭제 날짜(soft) */
  deletedAt?: Maybe<Scalars['DateTime']['output']>;
  /** 유저의 이메일 */
  email: Scalars['String']['output'];
  /** id */
  id: Scalars['String']['output'];
  /** 유저의 이름 */
  name: Scalars['String']['output'];
  postList?: Maybe<Array<Post>>;
  /** 데이터의 업데이트 날짜 */
  updatedAt: Scalars['DateTime']['output'];
};

export type CreateBlogMutationVariables = Exact<{
  input: CreateBlogInputDto;
}>;


export type CreateBlogMutation = { __typename?: 'Mutation', createBlog: { __typename?: 'Blog', name: string, domain: string, greeting: string, photo: string, introduction: string, skills?: Array<string> | null, email?: string | null, github?: string | null } };

export type CreatePostMutationVariables = Exact<{
  input: CreatePostInputDto;
}>;


export type CreatePostMutation = { __typename?: 'Mutation', createPost: { __typename?: 'Post', id: string } };

export type CreateUserMutationVariables = Exact<{
  input: CreateUserInputDto;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser: { __typename?: 'User', id: string, name: string, email: string, createdAt: any, updatedAt: any } };

export type DeletePostMutationVariables = Exact<{
  input: DeletePostInputDto;
}>;


export type DeletePostMutation = { __typename?: 'Mutation', deletePost: boolean };

export type UpdateBlogMutationVariables = Exact<{
  input: UpdateBlogInputDto;
}>;


export type UpdateBlogMutation = { __typename?: 'Mutation', updateBlog: { __typename?: 'Blog', name: string, domain: string, greeting: string, photo: string, introduction: string, skills?: Array<string> | null, email?: string | null, github?: string | null } };

export type UpdatePostMutationVariables = Exact<{
  input: UpdatePostInputDto;
}>;


export type UpdatePostMutation = { __typename?: 'Mutation', updatePost: { __typename?: 'Post', id: string, title: string, content: string, hashtagList?: Array<string> | null } };

export type UpdateUserMutationVariables = Exact<{
  input: UpdateUserInputDto;
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', updateUser: { __typename?: 'User', name: string, email: string } };

export type LoginQueryVariables = Exact<{
  input: LoginInputDto;
}>;


export type LoginQuery = { __typename?: 'Query', login: string };

export type ReadBlogQueryVariables = Exact<{
  input: ReadBlogInputDto;
}>;


export type ReadBlogQuery = { __typename?: 'Query', readBlog: { __typename?: 'Blog', id: string, name: string, domain: string, greeting: string, photo: string, introduction: string, skills?: Array<string> | null, email?: string | null, github?: string | null } };

export type ReadBlogListQueryVariables = Exact<{
  input: ReadBlogListInputDto;
}>;


export type ReadBlogListQuery = { __typename?: 'Query', readBlogList: Array<{ __typename?: 'Blog', id: string, name: string, domain: string, greeting: string, photo: string, introduction: string, skills?: Array<string> | null, email?: string | null, github?: string | null, ownerId: string }> };

export type ReadPostQueryVariables = Exact<{
  input: ReadPostInputDto;
}>;


export type ReadPostQuery = { __typename?: 'Query', readPost: { __typename?: 'Post', id: string, title: string, content: string, hashtagList?: Array<string> | null, writer: (
      { __typename?: 'User' }
      & { ' $fragmentRefs'?: { 'UserFieldsFragment': UserFieldsFragment } }
    ) } };

export type UserFieldsFragment = { __typename?: 'User', id: string, name: string, email: string } & { ' $fragmentName'?: 'UserFieldsFragment' };

export type ReadPostListQueryVariables = Exact<{
  input: ReadPostListInputDto;
}>;


export type ReadPostListQuery = { __typename?: 'Query', readPostList: Array<{ __typename?: 'Post', id: string, title: string, content: string, hashtagList?: Array<string> | null, writer: (
      { __typename?: 'User' }
      & { ' $fragmentRefs'?: { 'UserFieldsFragment': UserFieldsFragment } }
    ) }> };

export type ReadUserQueryVariables = Exact<{ [key: string]: never; }>;


export type ReadUserQuery = { __typename?: 'Query', readUser: { __typename?: 'User', id: string, email: string, name: string, blog?: (
      { __typename?: 'Blog' }
      & { ' $fragmentRefs'?: { 'BlogFieldsFragment': BlogFieldsFragment } }
    ) | null } };

export type BlogFieldsFragment = { __typename?: 'Blog', id: string, domain: string } & { ' $fragmentName'?: 'BlogFieldsFragment' };

export class TypedDocumentString<TResult, TVariables>
  extends String
  implements DocumentTypeDecoration<TResult, TVariables>
{
  __apiType?: DocumentTypeDecoration<TResult, TVariables>['__apiType'];
  private value: string;
  public __meta__?: Record<string, any> | undefined;

  constructor(value: string, __meta__?: Record<string, any> | undefined) {
    super(value);
    this.value = value;
    this.__meta__ = __meta__;
  }

  toString(): string & DocumentTypeDecoration<TResult, TVariables> {
    return this.value;
  }
}
export const UserFieldsFragmentDoc = new TypedDocumentString(`
    fragment UserFields on User {
  id
  name
  email
}
    `, {"fragmentName":"UserFields"}) as unknown as TypedDocumentString<UserFieldsFragment, unknown>;
export const BlogFieldsFragmentDoc = new TypedDocumentString(`
    fragment BlogFields on Blog {
  id
  domain
}
    `, {"fragmentName":"BlogFields"}) as unknown as TypedDocumentString<BlogFieldsFragment, unknown>;
export const CreateBlogDocument = new TypedDocumentString(`
    mutation CreateBlog($input: CreateBlogInputDto!) {
  createBlog(input: $input) {
    name
    domain
    greeting
    photo
    introduction
    skills
    email
    github
  }
}
    `) as unknown as TypedDocumentString<CreateBlogMutation, CreateBlogMutationVariables>;
export const CreatePostDocument = new TypedDocumentString(`
    mutation CreatePost($input: CreatePostInputDto!) {
  createPost(input: $input) {
    id
  }
}
    `) as unknown as TypedDocumentString<CreatePostMutation, CreatePostMutationVariables>;
export const CreateUserDocument = new TypedDocumentString(`
    mutation CreateUser($input: CreateUserInputDto!) {
  createUser(input: $input) {
    id
    name
    email
    createdAt
    updatedAt
  }
}
    `) as unknown as TypedDocumentString<CreateUserMutation, CreateUserMutationVariables>;
export const DeletePostDocument = new TypedDocumentString(`
    mutation DeletePost($input: DeletePostInputDto!) {
  deletePost(input: $input)
}
    `) as unknown as TypedDocumentString<DeletePostMutation, DeletePostMutationVariables>;
export const UpdateBlogDocument = new TypedDocumentString(`
    mutation UpdateBlog($input: UpdateBlogInputDto!) {
  updateBlog(input: $input) {
    name
    domain
    greeting
    photo
    introduction
    skills
    email
    github
  }
}
    `) as unknown as TypedDocumentString<UpdateBlogMutation, UpdateBlogMutationVariables>;
export const UpdatePostDocument = new TypedDocumentString(`
    mutation UpdatePost($input: UpdatePostInputDto!) {
  updatePost(input: $input) {
    id
    title
    content
    hashtagList
  }
}
    `) as unknown as TypedDocumentString<UpdatePostMutation, UpdatePostMutationVariables>;
export const UpdateUserDocument = new TypedDocumentString(`
    mutation UpdateUser($input: UpdateUserInputDto!) {
  updateUser(input: $input) {
    name
    email
  }
}
    `) as unknown as TypedDocumentString<UpdateUserMutation, UpdateUserMutationVariables>;
export const LoginDocument = new TypedDocumentString(`
    query Login($input: LoginInputDto!) {
  login(input: $input)
}
    `) as unknown as TypedDocumentString<LoginQuery, LoginQueryVariables>;
export const ReadBlogDocument = new TypedDocumentString(`
    query ReadBlog($input: ReadBlogInputDto!) {
  readBlog(input: $input) {
    id
    name
    domain
    greeting
    photo
    introduction
    skills
    email
    github
  }
}
    `) as unknown as TypedDocumentString<ReadBlogQuery, ReadBlogQueryVariables>;
export const ReadBlogListDocument = new TypedDocumentString(`
    query ReadBlogList($input: ReadBlogListInputDto!) {
  readBlogList(input: $input) {
    id
    name
    domain
    greeting
    photo
    introduction
    skills
    email
    github
    ownerId
  }
}
    `) as unknown as TypedDocumentString<ReadBlogListQuery, ReadBlogListQueryVariables>;
export const ReadPostDocument = new TypedDocumentString(`
    query ReadPost($input: ReadPostInputDto!) {
  readPost(input: $input) {
    id
    title
    content
    hashtagList
    writer {
      ...UserFields
    }
  }
}
    fragment UserFields on User {
  id
  name
  email
}`) as unknown as TypedDocumentString<ReadPostQuery, ReadPostQueryVariables>;
export const ReadPostListDocument = new TypedDocumentString(`
    query ReadPostList($input: ReadPostListInputDto!) {
  readPostList(input: $input) {
    id
    title
    content
    hashtagList
    writer {
      ...UserFields
    }
  }
}
    fragment UserFields on User {
  id
  name
  email
}`) as unknown as TypedDocumentString<ReadPostListQuery, ReadPostListQueryVariables>;
export const ReadUserDocument = new TypedDocumentString(`
    query ReadUser {
  readUser {
    id
    email
    name
    blog {
      ...BlogFields
    }
  }
}
    fragment BlogFields on Blog {
  id
  domain
}`) as unknown as TypedDocumentString<ReadUserQuery, ReadUserQueryVariables>;