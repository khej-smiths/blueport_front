import { ReactNode } from "react";

export default function H3({ children, ...props }: { children: ReactNode }) {
  return (
    <h3 className="text-h3 mt-3 font-bold" {...props}>
      {children}
    </h3>
  );
}
