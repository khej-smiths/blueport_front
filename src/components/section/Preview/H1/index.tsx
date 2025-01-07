import { ReactNode } from "react";

export default function H1({ children, ...props }: { children: ReactNode }) {
  return (
    <h1 className="font-bold text-[2.5rem] mt-5 " {...props}>
      {children}
    </h1>
  );
}
