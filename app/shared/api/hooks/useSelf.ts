import { useQuery } from "@tanstack/react-query";

import { QUERY_KEY } from "../../constant/queryKey";
import { readUser } from "../queries";
import { ClientError } from "graphql-request";
import { useNavigate } from "react-router";
import { useAuthStore } from "../../stores/auth";
import { ROUTE } from "@/shared/constant/route";

export function useSelf(accessToken: string | null) {
  const { logout } = useAuthStore();
  const navigate = useNavigate();

  return useQuery({
    queryKey: QUERY_KEY.user.readUser(),
    queryFn: async () => {
      if (!accessToken) return;

      const res = await readUser(accessToken);
      return res.readUser;
    },
    throwOnError: (error: ClientError) => {
      if (
        error.response &&
        error.response.errors &&
        error.response.errors.length > 0
      ) {
        const code = error.response.errors[0].extensions?.code;

        if (code && (code as string).includes("ERR_EXPIRED_TOKEN")) {
          logout();
          navigate(ROUTE.LOGIN);
        }
      }
      throw new Error(error.response.errors?.[0].message);
    },
    enabled: Boolean(accessToken),
  });
}
