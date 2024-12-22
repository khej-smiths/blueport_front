import { ButtonHTMLAttributes, ReactNode } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode;
}

export default function ToolbarItem({ icon, ...rest }: Props) {
  return (
    <button
      className="size-12 flex justify-center items-center text-[1.75rem] flex-shrink-0 text-[#868e96] hover:bg-[#f8f9fa] hover:text-[#212529] transition-all duration-[125ms] ease-in"
      {...rest}
    >
      {icon}
    </button>
  );
}
