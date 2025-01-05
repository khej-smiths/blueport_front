import { ReactNode } from "react";

export default function H1({ children }: { children: ReactNode }) {
  return <h1 className="font-bold text-[2.5rem] mt-5 ">{children}</h1>;
}
