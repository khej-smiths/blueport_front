export interface LabelInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  children: React.ReactNode;
  labelStyle?: React.HTMLAttributes<HTMLSpanElement>["className"];
  required?: boolean;
}
