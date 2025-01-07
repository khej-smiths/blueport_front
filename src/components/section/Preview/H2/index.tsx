import { ReactNode } from "react";

export default function H2({ children, ...props }: { children: ReactNode }) {
  return <h2 className="font-bold text-[2rem] mt-4 " {...props}>{children}</h2>;
}
