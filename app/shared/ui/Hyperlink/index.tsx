import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  href: string;
}

export function Hyperlink({ children, href }: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-[#4078f2] underline"
    >
      {children}
    </a>
  );
}
