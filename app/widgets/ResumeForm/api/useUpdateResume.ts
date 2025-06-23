import {
  getErrorMessage,
  MUTATIONS,
  ROOT_KEY,
  useDebounceMutation,
  useInvalidateQueries,
} from "@/shared";
import { UpdateResumeInputDto } from "@/shared";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export function useUpdateResume() {
  const { invalidateQueries } = useInvalidateQueries();
  const mutation = useMutation({
    mutationFn: async (data: UpdateResumeInputDto) => {
      await MUTATIONS.updateResume(data);
    },
    onSuccess: () => {
      invalidateQueries(ROOT_KEY.resume);
      toast.success("이력서가 수정되었습니다.");
    },
    onError: (error) => {
      const message = getErrorMessage(error);
      toast.error(message);
    },
  });

  return useDebounceMutation(mutation);
}
