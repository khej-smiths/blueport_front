import { QUERIES, ReadResumeInputDto } from "@/shared";
import { QUERY_KEY } from "@/shared/constant/queryKey";
import { useQuery } from "@tanstack/react-query";
import { ClientError } from "graphql-request";

export function useGetResume(params?: ReadResumeInputDto) {
  return useQuery({
    queryKey: QUERY_KEY.resume.readResume(params),
    queryFn: async () => {
      if (!params) return;
      const res = await QUERIES.readResume(params);

      return res.readResume;
    },
    throwOnError: (error: ClientError["response"]) => {
      throw new Error(error.errors?.[0].message);
    },
    enabled: Boolean(params),
  });
}
