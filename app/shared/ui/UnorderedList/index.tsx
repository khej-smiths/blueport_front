import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export function UnorderedList({ children }: Props) {
  return <ul className="list-inside list-disc">{children}</ul>;
}
