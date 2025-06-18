import { useQuery } from "@tanstack/react-query";

import { QUERY_KEY } from "../../constant/queryKey";
import { readUser } from "../queries";
import { useAuthStore } from "../../stores/auth";
import { ClientError } from "graphql-request";

export function useSelf() {
  const { accessToken } = useAuthStore();

  return useQuery({
    queryKey: QUERY_KEY.user.readUser(),
    queryFn: async () => {
      if (!accessToken) return;

      const res = await readUser();
      return res.readUser;
    },
    throwOnError: (error: ClientError["response"]) => {
      throw new Error(error.errors?.[0].message);
    },
    enabled: Boolean(accessToken),
  });
}
