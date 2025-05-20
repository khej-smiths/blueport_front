import { MUTATIONS, useDebounceMutation } from "@/shared";
import { CreateUserInputDto } from "@/shared/api/gql/graphql";
import { useMutation } from "@tanstack/react-query";

export function useCreateUser() {
  const mutation = useMutation({
    mutationFn: async (body: CreateUserInputDto) => {
      return await MUTATIONS.createUser(body);
    },
  });

  return useDebounceMutation(mutation);
}
