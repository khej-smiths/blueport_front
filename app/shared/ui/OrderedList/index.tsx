import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export function OrderedList({ children }: Props) {
  return <ol className="list-inside list-decimal">{children}</ol>;
}
