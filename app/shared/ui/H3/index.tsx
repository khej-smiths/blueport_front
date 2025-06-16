import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export function H3({ children, ...props }: Props) {
  return (
    <h3 className="text-h3 text-primary mt-3 font-bold" {...props}>
      {children}
    </h3>
  );
}
