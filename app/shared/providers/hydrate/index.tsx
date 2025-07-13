import { ReactNode } from "react";
import { HydrationBoundary } from "@tanstack/react-query";
import { useDehydratedState } from "@/shared";

interface Props {
  children: ReactNode;
}

export function HydrateProvider({ children }: Props) {
  const dehydrateState = useDehydratedState();

  return (
    <HydrationBoundary state={dehydrateState}>{children}</HydrationBoundary>
  );
}
