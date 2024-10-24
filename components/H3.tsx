import { ReactNode } from "react";

export default function H3({ children }: { children: ReactNode }) {
  return <h3 className="font-bold text-[1.5rem] mt-3 ">{children}</h3>;
}
