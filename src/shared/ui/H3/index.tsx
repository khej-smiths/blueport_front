import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export function H3({ children, ...props }: Props) {
  return (
    <h3 className="mt-3 text-h3 font-bold" {...props}>
      {children}
    </h3>
  );
}
