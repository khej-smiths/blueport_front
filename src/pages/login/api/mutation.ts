import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

import { getErrorMessage, QUERIES, useDebounceMutation } from "@/shared";

import { LoginFormDto } from "../model/type";

export function useLogin() {
  const mutation = useMutation({
    mutationFn: async (data: LoginFormDto) => {
      const res = await QUERIES.login(data)
      return res
    },
    onError: (error) => {
      const message = getErrorMessage(error);
      toast.error(message);
    }
  })

  return useDebounceMutation(mutation);
}