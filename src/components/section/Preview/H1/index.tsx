import { ReactNode } from "react";

export default function H1({ children, ...props }: { children: ReactNode }) {
  return (
    <h1 className="text-h1 mt-5 font-bold" {...props}>
      {children}
    </h1>
  );
}
