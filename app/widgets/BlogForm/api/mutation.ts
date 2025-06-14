import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

import { getErrorMessage, MUTATIONS, UpdateBlogInputDto, useDebounceMutation } from "@/shared";
import { CreateBlogInputDto } from "@/shared";

export function useCreateBlog() {

  const mutation = useMutation({
    mutationFn: async (data: CreateBlogInputDto) => {
      const res = await MUTATIONS.createBlog(data)
      return res.createBlog
    },
    onError: (error) => {
      const message = getErrorMessage(error)
      toast.error(message)
    }
  })

  return useDebounceMutation(mutation)
}

export function useUpdateBlog() {
  const mutation = useMutation({
    mutationFn: async (data: UpdateBlogInputDto) => {
      await MUTATIONS.updateBlog(data)
    },
    onError: (error) => {
      const message = getErrorMessage(error)
      toast.error(message)
    }
  })

  return useDebounceMutation(mutation)
}