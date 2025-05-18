import { cn } from "../../lib/cn";

interface Props {
  children: React.ReactNode;
  required?: boolean;
  labelStyle?: React.HTMLAttributes<HTMLSpanElement>["className"];
}

export function FormLabel({ children, required, labelStyle }: Props) {
  return (
    <div aria-label="label">
      <span className={cn("text-lg font-thin", labelStyle)}>{children}</span>
      {required && <span className="ml-1 font-thin text-secondary">*</span>}
    </div>
  );
}
