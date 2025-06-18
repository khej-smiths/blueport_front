import { QUERIES, QUERY_KEY, ReadPostListInputDto } from "@/shared";
import { useQuery } from "@tanstack/react-query";
import { ClientError } from "graphql-request";
import { useEffect, useState } from "react";

export function useGetPostList(params?: ReadPostListInputDto) {
  return useQuery({
    queryKey: QUERY_KEY.post.readPostList(params),
    queryFn: async () => {
      if (!params) return;
      const res = await QUERIES.readPostList(params);
      return res.readPostList;
    },
    throwOnError: (error: ClientError["response"]) => {
      throw new Error(error.errors?.[0].message);
    },
    enabled: Boolean(params),
  });
}

export function useDebounceGetPostList(params?: ReadPostListInputDto) {
  const [debouncedParams, setDebouncedParams] = useState(params);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedParams(params);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [params]);

  return useGetPostList(debouncedParams);
}
