import { QUERIES, QUERY_KEY, ReadPostListInputDto } from "@/shared";
import { useQuery } from "@tanstack/react-query";
import { ClientError } from "graphql-request";

export function useGetPostListByBlogId(
  accessToken: string | null,
  params?: ReadPostListInputDto
) {
  return useQuery({
    queryKey: QUERY_KEY.post.readPostList(params),
    queryFn: async () => {
      if (!params || !params.blogId) return;
      const res = await QUERIES.readPostList(accessToken, params);
      return res;
    },
    throwOnError: (error: ClientError["response"]) => {
      throw new Error(error.errors?.[0].message);
    },
    staleTime: 0,
    gcTime: 0,
    enabled: Boolean(params?.blogId),
  });
}
