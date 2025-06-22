import {
  CreatePostInputDto,
  getErrorMessage,
  MUTATIONS,
  ROUTE,
  useDebounceMutation,
  useInvalidateQueries,
} from "@/shared";
import { ROOT_KEY } from "@/shared/constant/queryKey";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { toast } from "sonner";

export function useCreatePost() {
  const navigate = useNavigate();
  const { invalidateQueries } = useInvalidateQueries();

  const mutation = useMutation({
    mutationFn: async (input: CreatePostInputDto) => {
      const res = await MUTATIONS.createPost(input);

      if (!res.createPost.owner.blog) {
        throw new Error("블로그가 존재하지 않습니다.");
      }

      return {
        domain: res.createPost.owner.blog.domain,
        id: res.createPost.id,
      };
    },
    onSuccess: ({ domain, id }) => {
      invalidateQueries(ROOT_KEY.post);
      toast.success("게시글이 성공적으로 작성되었습니다.");
      navigate(ROUTE.POST.replace(":domain", domain).replace(":id", id));
    },
    onError: (error) => {
      const message = getErrorMessage(error);
      toast.error(message);
    },
  });

  return useDebounceMutation(mutation);
}
