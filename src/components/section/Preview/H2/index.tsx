import { ReactNode } from "react";

export default function H2({ children, ...props }: { children: ReactNode }) {
  return (
    <h2 className="text-h2 mt-4 font-bold" {...props}>
      {children}
    </h2>
  );
}
