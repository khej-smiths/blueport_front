import {
  DeletePostInputDto,
  getErrorMessage,
  MUTATIONS,
  useDebounceMutation,
  useInvalidateQueries,
} from "@/shared";
import { ROOT_KEY } from "@/shared/constant/queryKey";
import { useMutation } from "@tanstack/react-query";
import { ClientError } from "graphql-request";
import { useNavigate } from "react-router";
import { toast } from "sonner";

export function useDeletePost() {
  const navigate = useNavigate();
  const { invalidateQueries } = useInvalidateQueries();

  const mutation = useMutation({
    mutationFn: async (input: DeletePostInputDto) => {
      await MUTATIONS.deletePost(input);
    },
    onSuccess: () => {
      invalidateQueries(ROOT_KEY.post);
      toast.success("게시글이 삭제되었습니다.");
      navigate(-1);
    },
    onError: (error: ClientError["response"]) => {
      const message = getErrorMessage(error);
      toast.error(message);
    },
  });

  return useDebounceMutation(mutation);
}
