import { ReactNode } from "react";

export default function H3({ children, ...props }: { children: ReactNode }) {
  return (
    <h3 className="font-bold text-[1.5rem] mt-3 " {...props}>
      {children}
    </h3>
  );
}
