import {
  CreateBlogInputDto,
  CreateBlogMutation,
  CreatePostInputDto,
  CreatePostMutation,
  CreateResumeInputDto,
  CreateUserInputDto,
  DeletePostInputDto,
  UpdateBlogInputDto,
  UpdatePostInputDto,
  UpdatePostMutation,
  UpdateResumeInputDto,
  UpdateUserInputDto,
} from "../gql/graphql";
import { instance } from "../gql/instance";
import { createBlogMutation } from "./createBlog";
import { createPostMutation } from "./createPost";
import { createResumeMutation } from "./createResume";
import { createUserMutation } from "./createUser";
import { deletePostMutation } from "./deletePost";
import { updateBlogMutation } from "./updateBlog";
import { updatePostMutation } from "./updatePost";
import { updateResumeMutation } from "./updateResume";
import { updateUserMutation } from "./updateUser";

/** 회원가입 */
export async function createUser(input: CreateUserInputDto) {
  return await instance(createUserMutation, { input });
}

/** 회원 정보 수정 */
export async function updateUser(input: UpdateUserInputDto) {
  return await instance(updateUserMutation, { input });
}

/** 게시글 작성 */
export async function createPost(input: CreatePostInputDto) {
  return await instance<CreatePostMutation>(createPostMutation, { input });
}

/** 게시글 수정 */
export async function updatePost(input: UpdatePostInputDto) {
  return await instance<UpdatePostMutation>(updatePostMutation, { input });
}

/** 게시글 삭제 */
export async function deletePost(input: DeletePostInputDto) {
  return await instance(deletePostMutation, { input });
}

/** 블로그 생성 */
export async function createBlog(input: CreateBlogInputDto) {
  return await instance<CreateBlogMutation>(createBlogMutation, { input });
}

/** 블로그 수정 */
export async function updateBlog(input: UpdateBlogInputDto) {
  return await instance(updateBlogMutation, { input });
}

/** 이력서 생성 */
export async function createResume(input: CreateResumeInputDto) {
  return await instance(createResumeMutation, { input });
}

/** 이력서 수정 */
export async function updateResume(input: UpdateResumeInputDto) {
  return await instance(updateResumeMutation, { input });
}
