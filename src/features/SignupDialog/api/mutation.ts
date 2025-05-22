import { useMutation } from "@tanstack/react-query";

import { MUTATIONS, useDebounceMutation } from "@/shared";
import { CreateUserInputDto } from "@/shared/api/gql/graphql";

export function useCreateUser() {
  const mutation = useMutation({
    mutationFn: async (body: CreateUserInputDto) => {
      return await MUTATIONS.createUser(body);
    },
  });

  return useDebounceMutation(mutation);
}
