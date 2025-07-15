import { QUERIES, QUERY_KEY } from "@/shared";
import { useQuery } from "@tanstack/react-query";

export function useGetHashtagList() {
  return useQuery({
    queryKey: QUERY_KEY.hashtag.readHashtagList(),
    queryFn: async () => {
      const data = await QUERIES.readHashtagList();

      return data;
    },
  });
}
