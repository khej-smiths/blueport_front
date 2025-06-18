import { useQueryClient } from "@tanstack/react-query";

export function useInvalidateQueries() {
  const queryClient = useQueryClient();

  const invalidateQueries = (key: string) => {
    queryClient.invalidateQueries({ predicate: (query) => query.queryKey?.[0] === key, refetchType: "all" });
  };

  return { invalidateQueries };
}