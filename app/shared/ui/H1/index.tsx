import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export function H1({ children, ...props }: Props) {
  return (
    <h1 className="mt-5 text-h1 font-bold" {...props}>
      {children}
    </h1>
  );
}
