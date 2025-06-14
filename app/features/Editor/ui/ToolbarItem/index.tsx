import { ButtonHTMLAttributes, ReactNode } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode;
}

export function ToolbarItem({ icon, ...rest }: Props) {
  return (
    <button
      className="duration-[125ms] flex size-12 flex-shrink-0 items-center justify-center text-[1.75rem] text-[#868e96] transition-all ease-in hover:bg-[#f8f9fa] hover:text-[#212529]"
      {...rest}
    >
      {icon}
    </button>
  );
}
