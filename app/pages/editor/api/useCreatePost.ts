import { CreatePostInputDto, getErrorMessage, MUTATIONS, useDebounceMutation } from "@/shared";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export function useCreatePost() {

  const mutation = useMutation({
    mutationFn: async (input: CreatePostInputDto) => {
      const res = await MUTATIONS.createPost(input);

      // TODO: 블로그 조회 가능 시 이 주석 제거
      // if (!res.createPost.writer.blog) {
      //   throw new Error("블로그가 존재하지 않습니다.");
      // }

      return {
        domain: res.createPost.writer.blog?.domain,
        id: res.createPost.id
      }
    },
    onError: (error) => {
      const message = getErrorMessage(error);
      toast.error(message);
    },
  });

  return useDebounceMutation(mutation);
}
