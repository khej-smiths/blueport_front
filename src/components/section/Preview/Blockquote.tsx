import { ReactNode } from "react";

export default function Blockquote({ children }: { children: ReactNode }) {
  return (
    <blockquote className="bg-[#fafafa] p-4 border-l-4 border-black">
      <em>{children}</em>
    </blockquote>
  );
}
