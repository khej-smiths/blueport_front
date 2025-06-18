import { QUERIES, QUERY_KEY, useLayoutStore } from "@/shared";
import { useQuery } from "@tanstack/react-query";
import { ClientError } from "graphql-request";

export function useGetBlogByDomain(domain?: string) {
  const { setBlogGNB } = useLayoutStore();

  return useQuery({
    queryKey: QUERY_KEY.blog.readBlog(domain),
    queryFn: async () => {
      if (!domain) return;
      const res = await QUERIES.readBlog({domain})

      setBlogGNB({
        name: res.readBlog.name,
        domain: res.readBlog.domain,
        github: res.readBlog.github,
      });

      return res.readBlog;
    },
    throwOnError: (error: ClientError["response"]) => {
      throw new Error(error.errors?.[0].message);
    },
    enabled: Boolean(domain)
  });
}
