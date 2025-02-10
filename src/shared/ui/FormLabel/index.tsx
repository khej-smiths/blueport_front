import { cn } from "../../lib/cn";
import { FormLabelProps } from "../../types/form-label";

export function FormLabel({ children, required, labelStyle }: FormLabelProps) {
  return (
    <div aria-label="label">
      <span className={cn("text-lg font-thin", labelStyle)}>{children}</span>
      {required && <span className="ml-1 font-thin text-red-500">*</span>}
    </div>
  );
}
