import { useQuery } from "@tanstack/react-query";
import { ClientError } from "graphql-request";
import { toast } from "sonner";

import { getErrorMessage, QUERIES } from "@/shared";
import { QUERY_KEY } from "@/shared/constant/queryKey";

export function useReadUser() {
  return useQuery({
    queryKey: QUERY_KEY.readUser(),
    queryFn: async () => {
      try {
        const res = await QUERIES.readUser()
        return res
      } catch (error) {
        const message = getErrorMessage(error as ClientError)
        toast.error(message)
      }
    }
  });
}