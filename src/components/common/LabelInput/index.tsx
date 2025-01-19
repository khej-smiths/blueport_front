import { cn } from "@/lib/utils";
import { Input } from "../Input";
import Label from "../Label";

interface LabelInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  children: React.ReactNode;
  labelStyle?: React.HTMLAttributes<HTMLSpanElement>["className"];
  required?: boolean;
}

export default function LabelInput({
  children,
  required,
  labelStyle,
  ...rest
}: LabelInputProps) {
  const { className, ...props } = rest;

  return (
    <div className="flex flex-col gap-2" aria-label="textbox">
      <Label labelStyle={labelStyle} required={required}>
        {children}
      </Label>
      <Input
        variant="underline"
        className={cn("w-full p-0", className)}
        {...props}
      />
    </div>
  );
}
