import { QUERIES, QUERY_KEY } from "@/shared";
import { useQuery } from "@tanstack/react-query";
import { ClientError } from "graphql-request";

export function useGetBlogByDomain(
  accessToken: string | null,
  domain?: string
) {
  return useQuery({
    queryKey: QUERY_KEY.blog.readBlog(domain),
    queryFn: async () => {
      if (!domain) return;
      const res = await QUERIES.readBlog(accessToken, { domain });

      return res;
    },
    throwOnError: (error: ClientError["response"]) => {
      throw new Error(error.errors?.[0].message);
    },
    enabled: Boolean(domain),
  });
}
