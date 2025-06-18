import { ButtonHTMLAttributes, ReactNode } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode;
}

export function ToolbarItem({ icon, ...rest }: Props) {
  return (
    <button
      type="button"
      className="flex size-12 flex-shrink-0 cursor-pointer items-center justify-center text-[1.75rem] text-[#868e96] transition-all duration-[125ms] ease-in hover:bg-[#f8f9fa] hover:text-[#212529]"
      {...rest}
    >
      {icon}
    </button>
  );
}
