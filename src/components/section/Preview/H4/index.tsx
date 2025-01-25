import { ReactNode } from "react";

export default function H4({ children, ...props }: { children: ReactNode }) {
  return (
    <h4 className="text-h4 mt-2 font-bold" {...props}>
      {children}
    </h4>
  );
}
