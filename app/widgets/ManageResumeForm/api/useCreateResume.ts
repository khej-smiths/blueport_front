import {
  CreateResumeInputDto,
  getErrorMessage,
  MUTATIONS,
  ROOT_KEY,
  useDebounceMutation,
  useInvalidateQueries,
} from "@/shared";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

export function useCreateResume() {
  const { invalidateQueries } = useInvalidateQueries();
  const mutation = useMutation({
    mutationFn: async (data: CreateResumeInputDto) => {
      await MUTATIONS.createResume(data);
    },
    onSuccess: () => {
      invalidateQueries(ROOT_KEY.resume);
      toast.success("이력서가 생성되었습니다.");
    },
    onError: (error) => {
      const message = getErrorMessage(error);
      toast.error(message);
    },
  });

  return useDebounceMutation(mutation);
}