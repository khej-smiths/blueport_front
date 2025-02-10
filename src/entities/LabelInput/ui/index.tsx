import { cn, Input, FormLabel } from "@/shared";
import { LabelInputProps } from "../model/type";

export function LabelInput({
  children,
  required,
  labelStyle,
  ...rest
}: LabelInputProps) {
  const { className, ...props } = rest;

  return (
    <div className="flex flex-col gap-2" aria-label="textbox">
      <FormLabel labelStyle={labelStyle} required={required}>
        {children}
      </FormLabel>
      <Input
        variant="underline"
        className={cn("w-full p-0", className)}
        {...props}
      />
    </div>
  );
}
