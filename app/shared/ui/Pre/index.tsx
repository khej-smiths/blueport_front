import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export function Pre({ children }: Props) {
  return (
    <pre className="rounded-md bg-[#fafafa] p-5 leading-[1.3] [&>code]:bg-transparent [&>code]:p-0 [&>code]:leading-[0]">
      {children}
    </pre>
  );
}
