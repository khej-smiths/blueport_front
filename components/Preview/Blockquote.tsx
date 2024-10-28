import { ReactNode } from "react";

export default function Blockquote({ children }: { children: ReactNode }) {
  return (
    <blockquote className="bg-[#fafafa] p-4 pl-8 border-l-4 border-black">
      {children}
    </blockquote>
  );
}
