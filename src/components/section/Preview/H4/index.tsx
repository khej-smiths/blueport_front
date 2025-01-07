import { ReactNode } from "react";

export default function H4({ children, ...props }: { children: ReactNode }) {
  return (
    <h4 className="font-bold text-[1.313rem] mt-2 " {...props}>
      {children}
    </h4>
  );
}
