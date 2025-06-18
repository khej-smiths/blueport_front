import { DeletePostInputDto, MUTATIONS, useDebounceMutation } from "@/shared";
import { ROOT_KEY } from "@/shared/constant/queryKey";
import { QueryClient, useMutation } from "@tanstack/react-query";
import { ClientError } from "graphql-request";
import { useNavigate } from "react-router";
import { toast } from "sonner";

export function useDeletePost() {
  const queryClient = new QueryClient();
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: async (input: DeletePostInputDto) => {
      await MUTATIONS.deletePost(input);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [ROOT_KEY.post] });
      toast.success("게시글이 삭제되었습니다.");
      navigate(-1);
    },
    onError: (error: ClientError["response"]) => {
      throw new Error(error.errors?.[0].message);
    },
  })

  return useDebounceMutation(mutation);
}