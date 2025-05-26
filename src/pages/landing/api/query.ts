import { useQuery } from "@tanstack/react-query";
import { ClientError } from "graphql-request";
import { toast } from "sonner";

import { getErrorMessage, QUERIES } from "@/shared";
import { QUERY_KEY } from "@/shared/constant/queryKey";

export function useCheckBlog() {
  return useQuery({
    queryKey: QUERY_KEY.checkBlog(),
    queryFn: async () => {
      try {
        const res = await QUERIES.checkBlog()
        return res
      } catch (error) {
        const message = getErrorMessage(error as ClientError)
        toast.error(message)
      }
    }
  });
}