import { QUERIES, QUERY_KEY } from "@/shared";
import { useQuery } from "@tanstack/react-query";

export function useGetHashtagList(accessToken: string | null) {
  return useQuery({
    queryKey: QUERY_KEY.hashtag.readHashtagList(),
    queryFn: async () => {
      const data = await QUERIES.readHashtagList(accessToken);

      return data;
    },
  });
}
