import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export function H4({ children, ...props }: Props) {
  return (
    <h4 className="text-h4 text-primary mt-2 font-bold" {...props}>
      {children}
    </h4>
  );
}
