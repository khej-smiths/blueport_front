import {
  getErrorMessage,
  MUTATIONS,
  ROUTE,
  UpdatePostInputDto,
  useDebounceMutation,
  useInvalidateQueries,
  ROOT_KEY,
} from "@/shared";
import { useMutation } from "@tanstack/react-query";
import { ClientError } from "graphql-request";
import { useNavigate } from "react-router";
import { toast } from "sonner";

export function useUpdatePost() {
  const navigate = useNavigate();
  const { invalidateQueries } = useInvalidateQueries();

  const mutation = useMutation({
    mutationFn: async (input: UpdatePostInputDto) => {
      const res = await MUTATIONS.updatePost(input);

      if (!res.updatePost.owner.blog) {
        throw new Error("블로그가 존재하지 않습니다.");
      }

      return {
        domain: res.updatePost.owner.blog.domain,
        id: res.updatePost.id,
      };
    },
    onSuccess: ({ domain, id }) => {
      invalidateQueries(ROOT_KEY.post);
      toast.success("게시글이 성공적으로 수정되었습니다.");
      navigate(ROUTE.POST.replace(":domain", domain).replace(":id", id));
    },
    onError: (error: ClientError["response"]) => {
      const message = getErrorMessage(error);
      toast.error(message);
    },
  });

  return useDebounceMutation(mutation);
}
