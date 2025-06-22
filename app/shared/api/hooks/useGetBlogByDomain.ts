import { QUERIES, QUERY_KEY, useLayoutStore } from "@/shared";
import { useQuery } from "@tanstack/react-query";
import { ClientError } from "graphql-request";
import { useEffect } from "react";
import { useSelf } from "./useSelf";

export function useGetBlogByDomain(domain?: string) {
  const { setBlogGNB } = useLayoutStore();

  const { data: self } = useSelf();

  const { data } = useQuery({
    queryKey: QUERY_KEY.blog.readBlog(domain),
    queryFn: async () => {
      if (!domain) return;
      const res = await QUERIES.readBlog({ domain });

      return res.readBlog;
    },
    throwOnError: (error: ClientError["response"]) => {
      throw new Error(error.errors?.[0].message);
    },
    enabled: Boolean(domain),
  });

  useEffect(() => {
    if (!data || !self) return;

    setBlogGNB({
      name: data.name,
      domain: data.domain,
      github: data.github,
      isMine: data.id === self.blog?.id,
    });
  }, [data, self]);

  return { data };
}
