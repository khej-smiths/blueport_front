import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export function H2({ children, ...props }: Props) {
  return (
    <h2 className="mt-4 text-h2 font-bold" {...props}>
      {children}
    </h2>
  );
}
