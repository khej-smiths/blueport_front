import { ReactNode } from "react";

export default function H2({ children }: { children: ReactNode }) {
  return <h2 className="font-bold text-[2rem] mt-4 ">{children}</h2>;
}
