import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export function H4({ children, ...props }: Props) {
  return (
    <h4 className="mt-2 text-h4 font-bold" {...props}>
      {children}
    </h4>
  );
}
