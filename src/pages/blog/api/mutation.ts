import { useMutation } from "@tanstack/react-query";

import { QUERIES } from "@/shared";
import { LoginInputDto } from "@/shared/api/gql/graphql";

export function useLoginMutation() {
  return useMutation({
    mutationFn: async (body: LoginInputDto) => {
      await QUERIES.login(body);
    },
  });
}
