import { cn } from "@/lib/utils";

interface FormLabelProps {
  children: React.ReactNode;
  required?: boolean;
  labelStyle?: React.HTMLAttributes<HTMLSpanElement>["className"];
}

export default function FormLabel({
  children,
  required,
  labelStyle,
}: FormLabelProps) {
  return (
    <div aria-label="label">
      <span className={cn("text-lg font-thin", labelStyle)}>{children}</span>
      {required && <span className="ml-1 font-thin text-red-500">*</span>}
    </div>
  );
}
