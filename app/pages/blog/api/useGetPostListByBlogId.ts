import { QUERIES, QUERY_KEY, ReadPostListInputDto } from "@/shared";
import { useQuery } from "@tanstack/react-query";
import { ClientError } from "graphql-request";

export function useGetPostListByBlogId(params?: ReadPostListInputDto) {
  return useQuery({
    queryKey: QUERY_KEY.post.readPostList(params),
    queryFn: async () => {
      if (!params || !params.blogId) return;
      const res = await QUERIES.readPostList(params);
      return res.readPostList;
    },
    throwOnError: (error: ClientError["response"]) => {
      throw new Error(error.errors?.[0].message);
    },
    staleTime: 0,
    gcTime: 0,
    enabled: Boolean(params?.blogId),
  });
}
