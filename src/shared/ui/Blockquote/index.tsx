import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export function Blockquote({ children }: Props) {
  return (
    <blockquote className="border-l-4 border-black bg-[#fafafa] p-4">
      <em>{children}</em>
    </blockquote>
  );
}
