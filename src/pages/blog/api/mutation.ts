import { QUERIES } from "@/shared";
import { LoginInputDto } from "@/shared/api/gql/graphql";
import { useMutation } from "@tanstack/react-query";

export function useLoginMutation() {
  return useMutation({
    mutationFn: async (body: LoginInputDto) => {
      await QUERIES.login(body);
    },
  });
}
