import { ReactNode } from "react";

export default function Code({ children }: { children: ReactNode }) {
  return (
    <code className="bg-[#e9ecef] font-mono py-[2px] px-[6px] rounded-md">
      {children}
    </code>
  );
}
