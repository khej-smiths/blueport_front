import { Pagination, QUERIES, QUERY_KEY } from "@/shared";
import { useQuery } from "@tanstack/react-query";

export function useGetBlogList(pagination?: Pagination) {
  return useQuery({
    queryKey: QUERY_KEY.blog.readBlogList(pagination),
    queryFn : async () => {
      if (!pagination) return;

      const res = await QUERIES.readBlogList({
        pageNumber: pagination.pageNumber,
        limit: pagination.limit,
      });

      return res.readBlogList;
    },
    enabled: Boolean(pagination),
  });
}
