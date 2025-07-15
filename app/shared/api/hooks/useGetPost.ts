import { QUERIES, QUERY_KEY } from "@/shared";
import { useQuery } from "@tanstack/react-query";
import { ClientError } from "graphql-request";

export function useGetPost(postId?: string | null) {
  return useQuery({
    queryKey: QUERY_KEY.post.readPost(postId),
    queryFn: async () => {
      if (!postId) return;

      const res = await QUERIES.readPost({ id: postId });

      return res;
    },
    throwOnError: (error: ClientError["response"]) => {
      throw new Error(error.errors?.[0].message);
    },
    enabled: Boolean(postId),
  });
}
