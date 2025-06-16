import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export function H2({ children, ...props }: Props) {
  return (
    <h2 className="text-h2 text-primary mt-4 font-bold" {...props}>
      {children}
    </h2>
  );
}
