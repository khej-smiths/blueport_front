import { useQuery } from "@tanstack/react-query";
import { toast } from "sonner";

import { QUERY_KEY } from "@/shared";
import { readBlog } from "@/shared/api/queries";

export function useGetBlog(ownerId?: string) {
  return useQuery({
    queryKey: QUERY_KEY.blog(ownerId),
    queryFn: async () => {
      if (!ownerId) {
        toast.error("유저를 찾을 수 없습니다.")
        return
      };

      const res = await readBlog({
        ownerId,
      });

      return res.readBlog;
    },
    enabled: !!ownerId,
  });
}