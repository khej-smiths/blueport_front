import { cn } from "@/lib/utils";

interface LabelProps {
  label: string;
  required?: boolean;
  labelStyle?: React.HTMLAttributes<HTMLSpanElement>["className"];
}

export default function Label({ label, required, labelStyle }: LabelProps) {
  return (
    <div aria-label="label">
      <span className={cn("text-lg font-thin", labelStyle)}>{label}</span>
      {required && <span className="ml-1 font-thin text-red-500">*</span>}
    </div>
  );
}
