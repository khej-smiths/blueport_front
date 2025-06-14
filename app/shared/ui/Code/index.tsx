import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export function Code({ children }: Props) {
  return (
    <code className="font-mono rounded-md bg-[#e9ecef] px-[6px] py-[2px]">
      {children}
    </code>
  );
}
