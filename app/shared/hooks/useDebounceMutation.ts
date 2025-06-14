import { UseMutationResult } from "@tanstack/react-query";
import { useCallback } from "react";

import { useDebounce } from "./useDebounce";

interface DebounceMutationOptions {
  wait?: number;
  maxTime?: number;
  leading?: boolean;
  trailing?: boolean;
}

export function useDebounceMutation<
  TData = unknown,
  TError = unknown,
  TVariables = void,
  TContext = unknown,
>(
  mutation: UseMutationResult<TData, TError, TVariables, TContext>,
  options: DebounceMutationOptions = {}
) {
  const mutationCallback = useCallback(
    (variable: TVariables, options?: Parameters<typeof mutation.mutate>[1]) => {
      mutation.mutate(variable, options);
    },
    [mutation]
  );

  const { debounceFn: debounceMutate } = useDebounce(mutationCallback, options);

  return {
    ...mutation,
    mutate: debounceMutate,
  };
}
