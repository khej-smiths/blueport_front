import { type ReactNode } from "react";

import { QueryProvider } from "./react-query";

interface Props {
  children: ReactNode;
}

export function Providers({ children }: Props) {
  return <QueryProvider>{children}</QueryProvider>;
}
