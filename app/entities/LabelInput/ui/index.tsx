import { FormLabel, Input } from "@/shared";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  children: React.ReactNode;
  labelStyle?: React.HTMLAttributes<HTMLSpanElement>["className"];
  required?: boolean;
}

export function LabelInput({ children, required, labelStyle, ...rest }: Props) {
  const { className, ...props } = rest;

  return (
    <div className="flex flex-col gap-2" aria-label="textbox">
      <FormLabel labelStyle={labelStyle} required={required}>
        {children}
      </FormLabel>
      <Input variant="underline" className={className} {...props} />
    </div>
  );
}
