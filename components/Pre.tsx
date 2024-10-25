import { ReactNode } from "react";

export default function Pre({ children }: { children: ReactNode }) {
  return (
    <pre className="bg-[#fafafa] p-5 rounded-md leading-[1.3] [&>code]:bg-transparent [&>code]:p-0 [&>code]:leading-[0]">
      {children}
    </pre>
  );
}
