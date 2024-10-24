import { ReactNode } from "react";

export default function UnorderedList({ children }: { children: ReactNode }) {
  return <ul className="list-disc list-inside">{children}</ul>;
}
