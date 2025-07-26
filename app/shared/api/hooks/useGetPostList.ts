import { QUERIES, QUERY_KEY, ReadPostListInputDto } from "@/shared";
import { useQuery } from "@tanstack/react-query";
import { ClientError } from "graphql-request";

export function useGetPostList(
  accessToken: string | null,
  params?: ReadPostListInputDto
) {
  return useQuery({
    queryKey: QUERY_KEY.post.readPostList(params),
    queryFn: async () => {
      if (!params) return;
      const res = await QUERIES.readPostList(accessToken, params);
      return res;
    },
    staleTime: 0,
    gcTime: 0,
    throwOnError: (error: ClientError["response"]) => {
      throw new Error(error.errors?.[0].message);
    },
    enabled: Boolean(params),
  });
}
