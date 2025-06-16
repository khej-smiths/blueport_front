import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export function H1({ children, ...props }: Props) {
  return (
    <h1 className="text-h1 text-primary mt-5 font-bold" {...props}>
      {children}
    </h1>
  );
}
