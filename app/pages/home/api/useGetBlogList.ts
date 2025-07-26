import { Pagination, QUERIES, QUERY_KEY } from "@/shared";
import { useSuspenseQuery } from "@tanstack/react-query";

export function useGetBlogList(pagination?: Pagination) {
  return useSuspenseQuery({
    queryKey: QUERY_KEY.blog.readBlogList(pagination),
    queryFn: async () => {
      if (!pagination) return;

      const res = await QUERIES.readBlogList(null, {
        pageNumber: pagination.pageNumber,
        limit: pagination.limit,
      });

      return res;
    },
  });
}
