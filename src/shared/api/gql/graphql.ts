/* eslint-disable */
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
  /** 도메인 */
  domain: Scalars['String']['output'];
  /** id */
  id: Scalars['String']['output'];
  /** 자기소개 */
  introduction?: Maybe<Scalars['String']['output']>;
  /** 블로그 이름 */
  name: Scalars['String']['output'];
  /** 블로그 주인 전체 정보 */
  owner: User;
  /** 프로필 사진 */
  profilePhoto?: Maybe<Scalars['String']['output']>;
  /** 기술 스택 */
  skills?: Maybe<Scalars['String']['output']>;
  /** 데이터의 업데이트 날짜 */
  updatedAt: Scalars['DateTime']['output'];
};

export type CreateBlogInputDto = {
  /** 도메인 */
  domain: Scalars['String']['input'];
  /** 자기소개 */
  introduction?: InputMaybe<Scalars['String']['input']>;
  /** 블로그 이름 */
  name: Scalars['String']['input'];
  /** 프로필 사진 */
  profilePhoto?: InputMaybe<Scalars['String']['input']>;
  /** 기술 스택 */
  skills?: InputMaybe<Scalars['String']['input']>;
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
  /** 게시글 수정하기 */
  updatePost: Post;
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


export type MutationUpdatePostArgs = {
  input: UpdatePostInputDto;
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
  /** 게시글 작성자 */
  writer: User;
};

export type Query = {
  __typename?: 'Query';
  login: Scalars['String']['output'];
  /** 게시글 조회하기 */
  readPost: Post;
  /** 게시글 목록 조회하기 */
  readPostList: Array<Post>;
};


export type QueryLoginArgs = {
  input: LoginInputDto;
};


export type QueryReadPostArgs = {
  input: ReadPostInputDto;
};


export type QueryReadPostListArgs = {
  input: ReadPostListInputDto;
};

export type ReadPostInputDto = {
  /** id */
  id: Scalars['String']['input'];
};

export type ReadPostListInputDto = {
  /** 페이지 당 자료의 개수 */
  limit?: Scalars['Int']['input'];
  /** 페이지 번호 */
  pageNumber?: Scalars['Int']['input'];
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
  /** 유저의 비밀번호 */
  password: Scalars['String']['output'];
  postList?: Maybe<Array<Post>>;
  /** 데이터의 업데이트 날짜 */
  updatedAt: Scalars['DateTime']['output'];
};

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
