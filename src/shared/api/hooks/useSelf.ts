import { useQuery } from "@tanstack/react-query";

import { QUERY_KEY } from "../../constant/queryKey";
import { readUser } from "../queries";

export function useSelf() {
  return useQuery({
    queryKey: QUERY_KEY.user(),
    queryFn: async () => {
      const res = await readUser();
      return res.readUser;
    },
  })
}